const express = require('express');                                       //importando o modulo 'express' para dentro da variável 'express'
const cors = require('cors');
const routes = require('./routes');

const app = express();                                                    // instanciar o modulo express na variável 'app'

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);                                                         // app (servidor) está ouvindo na porta 3333