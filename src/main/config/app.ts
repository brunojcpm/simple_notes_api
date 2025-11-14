import { Hono } from 'hono';
import { makeNotesRouter } from '../routes/notes.router';

const app = new Hono();

app.notFound((context) =>
  context.json(
    {
      message: 'Route not found',
      error_code: 'ROUTE_NOT_FOUND',
    },
    404,
  ),
);

app.use('*', async (context, next) => {
  console.log(`${context.req.method} http://localhost${context.req.path}`);
  await next();
});

app.get('/ping', (context) => {
  return context.text('Pong!', 200);
});

app.route('/notes', makeNotesRouter());

export default app;
