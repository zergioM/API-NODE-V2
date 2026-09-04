const Sede = require('../models/sede.model');

const crear = async (data) => {

    return await Sede.create(data);

};

const listar = async () => {

    return await Sede.findAll();

};

const buscarPorId = async (id) => {

    return await Sede.findByPk(id);

};

const actualizar = async (id, data) => {

    return await Sede.update(
        data,
        {
            where: { id }
        }
    );

};

module.exports = {

    crear,
    listar,
    buscarPorId,
    actualizar

};