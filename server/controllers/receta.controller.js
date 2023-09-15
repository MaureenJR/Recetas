const Receta = require("../models/receta.model");

module.exports.guardarReceta = (req, res) => {
    Receta.create(req.body)
        .then(receta => res.json(receta))
        .catch(err => {
            res.status(400).json(err);
        })
}

module.exports.recetas = (req, res) => {
    Receta.find().sort({titulo: 1})
        .then(recetas => res.json(recetas))
        .catch(err => {
            res.status(400).json(err);
        })
}

module.exports.buscar = (req, res) => {
    Receta.findOne({_id: req.params.id})
        .then(receta => res.json(receta))
        .catch(err => {
            res.status(400).json(err);
        })
}

module.exports.borrar = (req, res) => {
    Receta.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => {
            res.status(400).json(err);
        })
}