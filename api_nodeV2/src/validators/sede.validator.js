const { body } =
require('express-validator');

const crearSedeValidator = [

    body('nombre')
    .notEmpty()
    .withMessage(
        'Nombre requerido'
    ),

    body('institucion_id')
    .notEmpty()
    .withMessage(
        'Institución requerida'
    )

];

module.exports = {

    crearSedeValidator

};