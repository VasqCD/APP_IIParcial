
// para este modelo se usan las librerias de mongoose y bcrypt para encriptar la contraseña ademas de jsonwebtoken para generar el token
// se deben instalar las librerias con npm install mongoose bcrypt jsonwebtoken

const mongoose = require('mongoose'); //importo la libreria de mongoose
const bcrypt = require('bcryptjs'); //importo la libreria de bcrypt para encriptar la contraseña

//defino el esquema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true //es obligatorio
    },
    email: {
        type: String,
        required: true, //es obligatorio
        unique: true //debe ser unico
    },
    password: {
        type: String,
        required: true //es obligatorio
    }
}); 

// el siguiente es un hook que se ejecuta antes de guardar el usuario en la base de datos 
// para encriptar la contraseña
userSchema.pre('save', async function() {
    if(this.isModified('password')) {
        const salt = await bcrypt.genSalt(10); //genero un salt para encriptar la contraseña: un salt es una cadena aleatoria que se agrega a la contraseña para hacerla mas segura
        this.password = await bcrypt.hash(this.password, salt); //encripto la contraseña con el salt generado anteriormente
    }
});

// el siguiente es un metodo que se ejecuta al hacer login para comparar la contraseña ingresada con la contraseña encriptada
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password); //comparo la contraseña ingresada con la contraseña encriptada
}

//defino el modelo
const User = mongoose.model('User', userSchema);

//haciendo la exportacion
module.exports = User; //exporto el modelo, para poder usarlo en otro archivo (el esquema no se exporta)