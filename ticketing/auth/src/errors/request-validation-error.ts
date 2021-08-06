import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
    constructor (public errors: ValidationError[]) {
        super();

        // Technicality when extending built in classes
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}