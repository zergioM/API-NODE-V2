const Usuario = require('../models/usuario.model');

const bcrypt = require('bcryptjs');

const {
    encriptarPassword
} = require('../utils/bcrypt')

const{
    generarJWT
} = require('../utils/jwt')

const registrar = async (data) => {
    const existeCorreo = 
    await Usuario.findOne({
        where:{correo: data.correo}
    });
    if(existeCorreo){
        throw new Error('Correo ya registrado');
    }
    data.password =
    await encriptarPassword(data.password);
    return await Usuario.create(data);
};

const login = async (
    correo,
    password
) => {
    const usuario = await Usuario.findOne({
        where: { correo }
    });
    if(!usuario){
         throw new Error('Usuario no existe',correo);
    }
    const validPassword = await bcrypt.compare(
        password,usuario.password
    );
    if(!validPassword){
         throw new Error('Password incorrecto');
    }
    const token = generarJWT(usuario);
    return {usuario, token};
};
module.exports ={
    registrar,
    login
};