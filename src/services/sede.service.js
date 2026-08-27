const sedeRepository =
require('../repositories/sede.repository');

const crearSede = async (data) => {

    return await sedeRepository.crear(data);

};

const listarSedes = async () => {

    return await sedeRepository.listar();

};

module.exports = {

    crearSede,
    listarSedes

};