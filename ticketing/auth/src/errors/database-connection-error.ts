import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Error connecting to database';

    constructor () {
        super('DatabaseConnectionError >>> Error connecting to DB');

        // Technicality when extending built in classes
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [{
            message: this.reason
        }];
    }
}