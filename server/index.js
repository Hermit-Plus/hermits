import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDb from './config/db.js';

import userRoutes from './routes/userRoutes.js';

dotenv.config();
connectDb();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API running...');
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Listening in ${process.env.NODE_ENV} mode, on port ${PORT}`)
);
