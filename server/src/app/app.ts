require('dotenv').config({
  path: '.env.development'
});

import express from 'express';
import cors from 'cors';

import '../database/connect';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


export default app;