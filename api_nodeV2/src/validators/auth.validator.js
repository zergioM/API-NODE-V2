const { body } = require ('express-validator');
const registerValidator = [
    body('nombre')
    .notEmpty()
    .withMessage('nombre requerido'),
     body('apellido')
    .notEmpty()
    .withMessage('apellido requerido'),
     body('correo')
    .isEmail()
    .withMessage('correo inválido'),
     body('password')
    .isLength({min: 6})
    .withMessage('Password mínimo 6 caracteres')
];
module.exports = {
    registerValidator
};