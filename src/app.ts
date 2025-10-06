import express from 'express';
import notesRouter from './routes/notes';
import { logger } from './middlewares/logger';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

// Before Middlewares
app.use(logger);

// Routes
app.use('/notes', notesRouter);

// After Middlewares
app.use(errorHandler);

export { app };
