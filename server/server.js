require('./config/config')
    // configuracion de servidor express api
const express = require('express');
const app = express();
// convertir el boy en un form-urlencoded
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
    // convertir a json el body
app.use(bodyParser.json());




app.get('/', (req, res) => {
    res.json('Hola Mundo');
});
app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});
app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json(body);
    }
});
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json('put Usuario ' + id);
});
app.delete('/usuario', (req, res) => {
    res.json('delete Usuario');
});
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
});