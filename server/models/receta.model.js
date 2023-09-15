const mongoose = require("mongoose");

const EsquemaReceta = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "Titulo no puede estar vacio"]
    },
    imagen: {
        type: String,
        required: [true, "Imagen no puede estar vacio"]
    },
    descripcion: {
        type: String,
        required: [true, "Descripcion no puede estar vacio"]
    },
    tipo: {
        type: String,
        required: [true, "Tipo no puede estar vacio"]
    },
    tiempo: {
        type: Number,
        required: [true, "Tiempo no puede estar vacio"]
    },
    gluten: {
        type: Boolean,
        default: true
    },
    diabeticos: {
        type: Boolean,
        default: true
    }
}, {timestamps:true, versionKey:false});

const Receta = mongoose.model("recetas", EsquemaReceta);
module.exports = Receta;

