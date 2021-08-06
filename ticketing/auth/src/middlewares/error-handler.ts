import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        console.log(err.message);
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    
    console.log('Generic Error >>>', err.message);
    res.status(400).send({
        errors: [{
            message: 'Unhandled error'
        }]
    });
}