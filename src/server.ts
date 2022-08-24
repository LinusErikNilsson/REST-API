import express, { NextFunction, Request, Response } from 'express';
import { consolelogger, securedLoggedIn } from './middlewares';

const app = express();

app.use(express.json());
app.use(consolelogger);

app.get('/', (req, res) => {
    res.status(200).json("Hello world!");
})

app.post("/api/post", securedLoggedIn, (req, res) => {
    // Create post
    res.status(201).json({});
});

app.listen(3000, () => console.log('Running on: http://localhost:3000'));

