const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://sa:Senha_15084@cluster0-szypc.mongodb.net/omninistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json);
server.use(routes);

server.listen(3333);