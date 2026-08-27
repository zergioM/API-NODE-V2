const Usuario = require('../models/usuario.model');
const crear = async(data) => {
    return await Usuario.create(data);
};
const buscarPorCorreo = async(correo) => {
    return await Usuario.findOne({where:{correo}});
};
const buscarPorId = async(id) => {
    return await Usuario.findByPk(id);
};
const listar = async() => {
    return await Usuario.findAll(
        {attributes:{exclude:['password']}}
    );
};

const actualizar = async(id,data) => {
    return await Usuario.update(data,{where:{id}});
};
module.exports ={
    crear,
    buscarPorCorreo,
    buscarPorId,
    listar,
    actualizar
};