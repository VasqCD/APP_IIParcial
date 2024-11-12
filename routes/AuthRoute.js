const auth = require('../auth/auth');

module.exports = (app) => {
    app.post('/signup', auth.signUp);
    app.post('/login', auth.logIn);
};


/*
    En este archivo se define la ruta de autenticacion, se importa el archivo de autenticacion y se exporta una funcion que recibe la app de express
    y se definen dos rutas, una para hacer signup y otra para hacer login

    el login tiene que ser post, porque en eel get no se envian parametrs en el body
    solamente en un post se envian parametros en el body
*/