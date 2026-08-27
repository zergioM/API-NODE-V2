const usuarioService = require('../services/usuario.service');

const crear = async (req, res) => {
    try{
        const usuario = await usuarioService.crearUsuario(req.body);
        res.status(201).json(usuario);
    }catch(error){
        res.status(400).json({error: error.message});
    }
    
};

const listar = async(req,res) => {
    const usuarios = await usuarioService.listarUsuarios();
    res.json(usuarios);
};

const eliminar = async(req,res)=>{
    try{
        const usuario=await usuarioService.desactivarUsuario(req.params.id);
        res.json(usuario);
    }catch(error){
        res.status(400).json({error : error.message});
    }
};
const actualizar=async(req,res)=>{
    try{
        const usuario=await usuarioService.actualizarUsuario(
        req.params.id,req.body
    );
    res.json(usuario);
    }catch(error){
        res.status(400).json({error : error.message });
    }
};

module.exports = {
    crear,
    listar,
    eliminar,
    actualizar
};
