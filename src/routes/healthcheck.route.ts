import { Router, Request, Response } from "express";

const healthCheck = Router();

healthCheck.get('/', async (req: Request, res: Response) => {

    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: new Date()
    };

    try {
        res.send(healthcheck);
    } catch (error) {
        healthcheck.message = error as string;
        res.status(503).send();
    }
    
});

export default healthCheck;