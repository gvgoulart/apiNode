// config inicial
require('dotenv').config()
const express  = require('express');
const app      = express();
const mongoose = require('mongoose');

// forma de ler JSON // middlewares
app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use(express.json());

//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// l8AiIVvtZhoNyLNF
// mongodb+srv://vieirabiel:l8AiIVvtZhoNyLNF@apicluster.o07tz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// rota inicial / endpoint
app.get('/', (req, res) => {
    // mostrar req

    res.json({message: 'Oi express!'})
});

// entregar uma porta,
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.o07tz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Conectamos ao banco')
        app.listen(3000)
    })
    .catch((err) => console.log(err))