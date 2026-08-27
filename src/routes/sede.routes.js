const express =
require('express');

const router =
express.Router();

const sedeController =
require('../controllers/sede.controller');

const {
    validarJWT
} = require(
'../middlewares/auth.middleware'
);

const {
    esAdminRole
} = require(
'../middlewares/role.middleware'
);

const {
    validarCampos
} = require(
'../middlewares/validate.middleware'
);

const {
    crearSedeValidator
} = require(
'../validators/sede.validator'
);

router.post(

    '/',

    [
        validarJWT,
        esAdminRole,
        crearSedeValidator,
        validarCampos
    ],

    sedeController.crear

);

router.get(

    '/',

    validarJWT,

    sedeController.listar

);

module.exports = router;