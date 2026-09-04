const authService = require('../services/auth.service');

const registro = async (req, res) => {
    try{
        const usuario = await authService.registrar(req.body);
        res.status(201).json(usuario);
    }catch(error){
        res.status(400).json({error: error.message});
    }
    
};

const login = async (req, res) => {
    try {

        const { usuario, token } = await authService.login(
            req.body.correo,
            req.body.password
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,      // Cambiar a true cuando publiques con HTTPS
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000 // 1 día
        });

        res.json({
            usuario
        });

    } catch (error) {

        res.status(400).json({
            error: error.message
        });

    }
};
 
const perfil = async (req, res) => {

    const {
        id,
        nombre,
        correo,
        rol,
        estado
    } = req.usuario;

    res.json({
        usuario: {
            id,
            nombre,
            correo,
            rol,
            estado
        }
    });

};

const logout = (req, res) => {

    res.clearCookie("token");

    res.json({
        ok: true,
        mensaje: "Sesión cerrada"
    });

};

module.exports = {
    registro,
    login,
    perfil,
    logout
};