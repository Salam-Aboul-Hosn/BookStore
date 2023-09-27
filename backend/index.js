import express from 'express';
import { PORT } from './config.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/books', async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get('/books', async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
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
