import express from 'express';
import { PORT } from './config.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

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
