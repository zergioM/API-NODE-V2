const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const usuarioRoutes = require("./routes/usuario.routes");
const institucionRoutes = require("./routes/institucion.routes");
const sedeRoutes = require("./routes/sede.routes");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/instituciones", institucionRoutes);
app.use("/api/sedes", sedeRoutes);

app.get("/", (req, res) => {
  res.send("🆗 API funcionando correctamente");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor activo");
});

module.exports = app;