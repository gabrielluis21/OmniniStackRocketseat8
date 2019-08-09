const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

mongoose.connect('mongodb+srv://sa:Senha_1234@cluster0-szypc.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const server = express();

server.use(cors());
server.use(express.json);
server.use(routes);

server.listen(3333);