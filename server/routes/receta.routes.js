const RecetaController = require("../controllers/receta.controller");

module.exports = (app) => {
    app.get("/api/recetas", RecetaController.recetas);
    app.post("/api/recetas/guardar", RecetaController.guardarReceta);
    app.get("/api/receta/:id", RecetaController.buscar);
    app.delete("/api/receta/borrar/:id", RecetaController.borrar);
}