const institucionService=require('../services/institucion.service');
const {successResponse,errorResponse}=require('../utils/response');
const crear = async(req,res)=>{
    try{
        const data=await institucionService.crearInstitucion(req.body);
        return successResponse(res,data,'Institución creada',201);
    }
    catch(error){
        return errorResponse(res,error.message);
    }
};
const listar = async(req,res)=>{
    try{
        const data=await institucionService.listarInstituciones();
        return successResponse(res,data);
    }
    catch(error){
        return errorResponse(res,error.message);
    }
};
const buscar = async(req,res)=>{
    try{
        const id=await institucionService.buscarInstitucion(req.params.id);
        return successResponse(res,id);
    }
    catch(error){
        return errorResponse(res,error.message);
    }
};
const actualizar = async(req,res)=>{
    try{
        const institucion=await institucionService.actualizarInstitucion(req.params.id,req.body);
        return successResponse(res,institucion);
    }
    catch(error){
        return errorResponse(res,error.message);
    }
};
module.exports={
    crear,listar,buscar,actualizar
};