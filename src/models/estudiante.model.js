const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
//const Sede = require('./sede.model');
const Usuario = require('./usuario.model');
const Estudiante =sequelize.define('Estudiante',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    grado:{
         type: DataTypes.STRING,
        allowNull:false
    }
}
     ,{
    tableName: 'Estudiantes',
    timestamps: true
});

Usuario.hasOne(Estudiante,{foreignKey:'usuario_id'});
Estudiante.belongsTo(Usuario,{foreignKey:'usuario_id'});
module.exports = Estudiante;