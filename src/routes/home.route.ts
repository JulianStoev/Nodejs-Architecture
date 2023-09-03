import { getHome } from "../services/home.service";
import { Router, Request, Response, NextFunction } from "express";

const home = Router();

home.get('/',  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    try {
        const homePage = getHome();
        const [ homeResult ] = await Promise.all([homePage]);
    
        res.json({ home: homeResult });
    } catch(err) {
        next(err || 'Could not get home data');
    }
    
});

export default home;