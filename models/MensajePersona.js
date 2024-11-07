const mongoose = require('mongoose');

//el esquema es el esqueleto, los campos que viy a tenr
// el modelo es la implementacion de ese esquema con las funciones 
// insertar, modificar, eliminar, etc

//defino el esquema
const schema = new mongoose.Schema({
    nombre: String,
    mensaje: String,
    edad: Number
});

//defino el modelo
const MensajePersona = mongoose.model('MensajePersona', schema);

//importante, cuando se crea un archivo aparte no se tienen disponible todo
// se debe especificar que se va a exportar del archivo

//haciendo la exportacion
module.exports = MensajePersona; //exporto el modelo, para poder usarlo en otro archivo (el esquema no se exporta)