const express = require('express'); // llamamos a express
const mongoose = require('mongoose'); // llamamos a mongoose
const MensajePersonaRoute = require('./routes/MensajePersonaRoute'); //importo el archivo de rutas

// realizar la conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/AppIIParcialPWII')
    .then(() => { // si la conexion es exitosa
        console.log('Conexion a la base de datos exitosa'); // se imprime un mensaje en la consola
    })
    .catch((err) => { // si hay un error en la conexion
        console.log('Error en la conexion a la base de datos: ', err); // se imprime el error en la consola
    });

    const app = express();  // llamamos a express para inicializar la app

    app.use(express.json()); // para que la app pueda entender json

    MensajePersonaRoute(app); //llamo a la funcion que exporte en el archivo de rutas y le paso la app

// primero hacer dos endpoints
// es decir la ruta o url que se va a llamar

// existen los metodos get, post, put, delete y patch
// get: para obtener informacion
// post: para enviar informacion
// put: para actualizar informacion
// delete: para eliminar informacion
// patch: para actualizar informacion parcialmente

// endpoint con la ruta para obtener informacion
// req = request -> peticion
// res = response -> respuesta (aunque no se usen se deben colocar las dos)

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

// desde otra ruta O PATCH
app.get('/contacto', (req, res) => {
    res.send('Pagina de contacto');
});



// como es aplicacion web, se debe indicar el puerto donde se va a ejecutar
// el puerto 3000 es el puerto por defecto de express

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
