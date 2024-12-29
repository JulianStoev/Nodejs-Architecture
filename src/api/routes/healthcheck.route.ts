import { Router, Request, Response, NextFunction } from "express";

const healthCheck = Router();

healthCheck.get('/', (req: Request, res: Response, next: NextFunction): void => {

    try {
        res.status(200).send({
            uptime: process.uptime(),
            message: 'OK',
            timestamp: new Date()
        });
    } catch (error) {
        next({status: 503, message: error});
    }
    
});

export default healthCheck;