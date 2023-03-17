const express = require('express');
const cors = require('cors');
const morgan = require('morgan')

const userRouter = require('./routes/userRouter');

const app = express();

app.use(cors());
app.use(morgan('tiny'))
app.use(express.json());

app.use('/users', userRouter);

module.exports = app;
