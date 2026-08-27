const { body } = require('express-validator');
const crearUsuarioValidator = [
    body('nombre')
    .notEmpty()
    .withMessage('Nombre requerido'),
    body('apellido')
    .notEmpty()
    .withMessage('Apellido requerido'),
    body('correo')
    .isEmail()
    .withMessage('Correo inválido'),
    body('password')
    .isLength({min: 6})
    .withMessage('Password mínimo 6 caracteres')
];
module.exports = { crearUsuarioValidator };