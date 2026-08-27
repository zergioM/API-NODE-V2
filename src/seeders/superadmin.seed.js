const { READCOMMITTED } = require('sequelize/lib/table-hints');
const Usuario = require('../models/usuario.model');
const {encriptarPassword} = require('../utils/bcrypt');
const crearSuperAdmin = async () => {
    try{
        const existe = await Usuario.findOne({
            where: {
                correo:
                process.env.SUPERADMIN_EMAIL
            }
        });
        if(existe){
            console.log('SUPERADMIN YA EXISTE');
            return;
        }
        const passwordHash = await encriptarPassword(process.env.SUPERADMIN_PASSWORD);
        await Usuario.create({
            nombre: 'SUPER',
            apellido: 'ADMIN',
            correo: process.env.SUPERADMIN_EMAIL,
            password: passwordHash,
            rol: 'ADMIN'
        });
        console.log('SUPERADMIN CREADO');
    }catch(error){
        console.log(error);
    }
};
module.exports = {
    crearSuperAdmin
};
