// ===================
// Verificar Token
// ===================

const jwt = require('jsonwebtoken');

let verificaToken = (req, res, next) => {
    // con get obtengo las cabeceras
    let token = req.get('token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'Token no enviado'
            }
        })
    }
    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            })
        }
        req.usuario = decoded.usuario;
        // next -> ejecuta la realizacion de los demas codigos ->avanza.
        next();
    });
};

// ===================
// Verifica AdminROle
// ==================
let verificaAdminRole = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        })
    }
};

let verificaTokenImg = (req, res, next) => {
    let token = req.query.token;
    if (!token) {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'Token no enviado'
            }
        })
    }
    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            })
        }
        req.usuario = decoded.usuario;
        // next -> ejecuta la realizacion de los demas codigos ->avanza.
        next();
    });
};

module.exports = {
    verificaToken,
    verificaAdminRole,
    verificaTokenImg
}