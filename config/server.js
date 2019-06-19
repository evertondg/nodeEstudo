var express = require('express');       // Requisição do express
var app = express(); //adiciono a instancia da funcção retornada pela requisição do express
app.set('view engine','ejs'); // ejs gerenciamento de views
app.set('views','./app/views'); // indicando o diretorio de views


module.exports = app;