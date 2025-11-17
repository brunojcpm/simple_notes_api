import { serve } from '@hono/node-server';
import dotenv from 'dotenv';
import app from '@/main/config/app';

dotenv.config();

const port = process.env.PORT || 3000;

function start() {
  try {
    serve(
      {
        fetch: app.fetch,
        port: port as number,
      },
      (info) => {
        console.log(`Listening on http://localhost:${info.port}`); // Listening on http://localhost:3000
      },
    );
  } catch (error) {
    console.error('Failed to start the server', error);
    process.exit(1);
  }
}

start();
