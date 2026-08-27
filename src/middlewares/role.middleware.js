const esAdminRole = (req,res,next) => {
    if(req.usuario.rol !== 'ADMIN')
    {
        return res.status(403).json({
            msg: 'No autorizado'
        });
    }
    next();
};
module.exports = {
    esAdminRole
};