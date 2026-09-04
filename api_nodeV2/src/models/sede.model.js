const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Institucion = require('./institucion.model');
const Sede =sequelize.define('Sede',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    nit:{
         type: DataTypes.STRING,
        unique:true
    },
    
    correo:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    direccion: {
         type:DataTypes.STRING,
        allowNull:false
    },
    telefono:{
         type:DataTypes.STRING,
        allowNull:false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},{
    tableName: 'Sedes',
    timestamps: true
});

Institucion.hasMany(Sede,{foreignKey:'institucion_id'});
Sede.belongsTo(Institucion,{foreignKey:'institucion_id'});


module.exports = Sede;