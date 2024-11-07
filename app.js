const express = require('express'); // llamamos a express
const app = express();  // llamamos a express para inicializar la app

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
