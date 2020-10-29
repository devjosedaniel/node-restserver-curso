// =======================
// Puerto
// =======================
process.env.PORT = process.env.PORT || 3000;
// =======================
// Entorno
// =======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// =======================
// Base de datos
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/helpDesk'
} else {
    urlDB = 'mongodb+srv://administradordb:xntKEsueA9s2WUlq@cluster0.bwfvw.mongodb.net/helpDesk';
}


process.env.urlDB = urlDB;
// =======================