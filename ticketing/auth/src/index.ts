import express from 'express';
import { json } from 'body-parser';

// Routers
import { currentUserRouter } from './routes/current-user';
import { signinrRouter } from './routes/signin';
import { signoutrRouter } from './routes/signout';
import { signuprRouter} from './routes/signup';

// Middleware
import { errorHandler } from './middlewares/error-handler';

const PORT = 3000;

// Express
const app = express();
app.use(json());

// Connect Routers
app.use(currentUserRouter);
app.use(signinrRouter);
app.use(signoutrRouter);
app.use(signuprRouter);

// Apply Middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})