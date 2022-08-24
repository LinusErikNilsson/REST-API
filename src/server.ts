import express from 'express';

const app = express();

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
    return;
});

app.get('/', (req, res) => {
    res.status(200).json("Hello world!");
})

app.listen(3000, () => console.log('Running on: http://localhost:3000'));

