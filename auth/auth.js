/*
Dentro de este archivo se va a colocar toda la logica que corresponde a la autenticacion de los usuarios
- creacion de usuarios
- login
- compara el token
- logout
- etc
*/

//importo el modelo de usuario
const User = require('../models/user');
//importo la libreria de jsonwebtoken y bcrypt
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


/*
Lo siguiente  de SECREY_KEY es una clave secreta que se usa para encriptar el token
es importante que sea una clave segura y que no se comparta
POR SEGURIDAD SE DEBE GUARDAR EN UN ARCHIVO .ENV
y no debe ser visible en el codigo
para acceder a esta variable se debe usar process.env.SECRET_KEY
para esto se debe instalar la libreria dotenv con npm install dotenv
y en el archivo principal se debe colocar require('dotenv').config();
y en el archivo .env se debe colocar SECRET_KEY=claveSecret
EN ESTE SE COLOCA AQUI CON FINES DIDACTICOS
*/
const SECRET_KEY = 'claveSecreta123'; //clave secreta para encriptar el token

// Controlador para crear un usuario
exports.signUp = async (req, res) => {
    try {
        // se obtienen los datos que se reciben en la peticion
        const pNombre = req.body.name;
        const pEmail = req.body.email;
        const pPassword = req.body.password;

        // validar que no queden campos vacios o nulos
        if (!pNombre) {
            res.status(400).send("El nombre es obligatorio");
            return;
        }
        if (!pEmail) {
            res.status(400).send("El email es obligatorio");
            return;
        }
        if (!pPassword) {
            res.status(400).send("La contraseña es obligatoria");
            return;
        }

        // expresiones regulares para validar el email
        let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(pEmail)) {
            res.status(400).send("El email no es valido");
            return;
        }

        // validar que el email no este registrado
        const userVerify = await User.findOne({ email: password });
        if (userVerify) {
            res.status(400).send("El email ya esta registrado");
            return;
        }


    } catch (error) {
        console.log('Error en signUp: ', error);
        res.status(500).send('Error en el servidor SignUp');
    }
}