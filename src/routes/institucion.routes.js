const express = require('express');
const router = express.Router();
const institucionController = require('../controllers/institucion.controller');
const { validarJWT } = require('../middlewares/auth.middleware');
const { esAdminRole } = require('../middlewares/role.middleware');
const { validarCampos } = require('../middlewares/validate.middleware');
const { crearInstitucionValidator } = require('../validators/institucion.validator');

router.post('/', [
    validarJWT,
    esAdminRole,
    crearInstitucionValidator,
    validarCampos],institucionController.crear);

router.get('/',[validarJWT,esAdminRole],institucionController.listar);

router.get('/:id',[
    validarJWT,
    esAdminRole
],institucionController.buscar
);

router.put('/:id',[
    validarJWT,
    esAdminRole
],
institucionController.actualizar);
module.exports = router;