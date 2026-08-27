const Institucion = require('../models/institucion.model');
const crear = async(data)=>{
    return await Institucion.create(data);
};
const listar=async()=>{
    return await Institucion.findAll();
};
const buscarPorId=async(id)=>{
    return await Institucion.findByPk(id);
};
const actualizar=async(id,data)=>{
    return await Institucion.update(data,{where:{id}});
};
module.exports={
    crear,listar,buscarPorId,actualizar
};