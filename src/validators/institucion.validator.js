const { body } = require('express-validator');
const crearInstitucionValidator=[
    body('nombre').notEmpty().withMessage('Nombre requerido')
];
module.exports={
    crearInstitucionValidator
};