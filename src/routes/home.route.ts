import { getHome } from "../services/home.service";
import { Router, Request, Response } from "express";
import { filterResponse } from "../tools/response.tool";

const home = Router();

home.get('/', async (req: Request, res: Response) => {
    const homePage = getHome();

    try {
        const [ homeResult ] = await Promise.all([homePage]);
        const result = {
            ...filterResponse({ response: homeResult, name: 'home', rows: 0 })
        };
    
        res.json(result);
    } catch(err) {
        console.log('error', err);
    }
    
});

export default home;