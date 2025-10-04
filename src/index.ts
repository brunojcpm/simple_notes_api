import express from 'express';
import cors from 'cors';
import notesRouter from './routes/notes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/notes', notesRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
