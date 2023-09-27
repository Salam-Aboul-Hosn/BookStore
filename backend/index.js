import express from 'express';
import { PORT } from './config.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
