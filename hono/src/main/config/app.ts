import { Hono } from 'hono'

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
    return context.text('Pong!', 200)
});

export default app;

