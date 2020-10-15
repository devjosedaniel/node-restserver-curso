const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// parse aplication/x-www-form-urlencoded
require('./config/config')
app.use(bodyParser.urlencoded({ extended: false }))
    // parse aplication/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Hola Mundo!');
});
app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});
app.post('/usuario', (req, res) => {


    let body = req.body;
    res.json({
        'persona': body
    });
});
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});
app.delete('/usuario', (req, res) => {
    res.json('delete Usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', 3000);
});