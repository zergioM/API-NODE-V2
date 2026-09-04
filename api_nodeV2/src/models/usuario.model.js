const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Sede = require('./sede.model');
const Usuario =sequelize.define('Usuario',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    apellido:{
         type: DataTypes.STRING,
        allowNull:false
    },
    
    correo:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    password: {
         type:DataTypes.STRING,
        allowNull:false
    },
    rol:{
        type: DataTypes.ENUM(
            'ADMIN',
            'DOCENTE',
            'ESTUDIANTE'
        ),
        defaultValue: 'ESTUDIANTE'
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},{
    tableName: 'usuarios',
    timestamps: true
});

Sede.hasMany(Usuario,{foreignKey:'sede_id'});
Usuario.belongsTo(Sede,{foreignKey:'sede_id'});
module.exports = Usuario;