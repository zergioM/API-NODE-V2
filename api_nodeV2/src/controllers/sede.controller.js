const sedeService =
require('../services/sede.service');

const {
    successResponse,
    errorResponse
} = require('../utils/response');

const crear = async (req, res) => {

    try {

        const sede =
        await sedeService.crearSede(
            req.body
        );

        return successResponse(
            res,
            sede,
            'Sede creada',
            201
        );

    } catch (error) {

        return errorResponse(
            res,
            error.message
        );

    }

};

const listar = async (req, res) => {

    try {

        const sedes =
        await sedeService.listarSedes();

        return successResponse(
            res,
            sedes
        );

    } catch (error) {

        return errorResponse(
            res,
            error.message
        );

    }

};

module.exports = {

    crear,
    listar

};