import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof RequestValidationError) {
        const formattedErrors = err.errors.map(e => {
            return {
                message: e.msg,
                field: e.param
            };
        })
        console.log('RequestValidationError >>>', formattedErrors);
        
        return res.status(400).send({ errors: formattedErrors })
    }
    
    if (err instanceof DatabaseConnectionError) {
        const formattedErrors = [{
            message: err.reason
        }];
        
        console.log('DatabaseConnectionError >>>', formattedErrors);
        
        return res.status(500).send({errors: formattedErrors})
    }
    
    console.log('Generic Error >>>', err.message);
    res.status(400).send({
        errors: [{
            message: 'Unhandled error'
        }]
    });
}