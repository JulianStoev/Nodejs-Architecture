import { getHome } from "../services/local/home/home.service";
import { Router, Request, Response, NextFunction } from "express";

const home = Router();

home.get('/',  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    try {
        const homePage = getHome();
        const [ homeResult ] = await Promise.all([homePage]);
    
        if (homeResult) {
            res.status(200).send({ home: homeResult });
            return;
        }

        res.status(404).send();
    } catch(err) {
        next(err || 'Could not get home data');
    }
    
});

export default home;