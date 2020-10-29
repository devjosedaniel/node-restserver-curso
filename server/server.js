require('./config/config')
    // configuracion de servidor express api
const express = require('express');
// Using Node.js `require()`
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
// convertir el body en un form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // convertir a json el body
app.use(bodyParser.json());



// Habilitar la carpeta publica
app.use(express.static(path.resolve(__dirname, '../public')));

// importar y usar las rutas
// config global de rutas
app.use(require('./routes/index'));




mongoose.connect(process.env.urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
});