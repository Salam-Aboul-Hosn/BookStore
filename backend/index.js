import express from 'express';
import { PORT } from './config.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/bookRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/books', booksRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
