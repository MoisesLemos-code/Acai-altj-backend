require("dotenv").config()

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require("cors");

const app = express();
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server, { origins: '*:*' });

io.origins(['*']);
io.on("connection", socket => {
    socket.on('connectRoom', file => {
        socket.join(file);
    });
});

mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Acces-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(routes);
app.listen(process.env.PORT || 3333);
