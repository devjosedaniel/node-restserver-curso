// =======================
// Puerto
// =======================
process.env.PORT = process.env.PORT || 3000;
// =======================
// Entorno
// =======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
    // =======================
    // Vencimiento del token
    // =======================

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// =======================
// SEED de autenticacion
// =======================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

process.env.CLIENT_ID = process.env.CLIENT_ID || '28690417943-76eksfi7ludshoos5cujh2la5hpg3jd8.apps.googleusercontent.com'

// =======================
// Base de datos
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    //  creacion de variable de entorno para la conexion en heroku
    urlDB = process.env.MONGO_URI;
}

process.env.urlDB = urlDB;
// =======================