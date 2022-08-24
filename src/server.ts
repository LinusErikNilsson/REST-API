import express, { NextFunction, Request, Response } from 'express';
import { consolelogger, securedLoggedIn } from './middlewares';
import postRouter from './resources/posts/post.router';

const app = express();

app.use(express.json());
app.use(consolelogger);
app.use("api/posts", postRouter);

app.listen(3000, () => console.log('Running on: http://localhost:3000'));

