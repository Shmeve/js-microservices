export class DatabaseConnectionError extends Error {
    reason = 'Error connecting to database';
    
    constructor () {
        super();

        // Technicality when extending built in classes
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}