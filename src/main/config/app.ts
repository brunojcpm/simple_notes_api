import { Hono } from 'hono';
import type { ContentfulStatusCode } from 'hono/utils/http-status';
import { HttpErrorResponseBuilder } from '@/errors/http-error-response.builder';
import { makeNotesRouter } from '../routes/notes.router';

const app = new Hono();

app.onError((error, context) => {
  const errorResponse = HttpErrorResponseBuilder.withError(error).build();

  if (errorResponse.statusCode === 500) {
    console.error('An unknown error occurred', error);
  }

  return context.json(
    errorResponse.body,
    errorResponse.statusCode as ContentfulStatusCode,
  );
});

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

app.get('/health-check', (context) => {
  return context.text('OK!', 200);
});

app.route('/notes', makeNotesRouter());

export default app;
