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

