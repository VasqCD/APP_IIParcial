
const MensajePersonaController = require('../controllers/MensajePersonaController'); //importo el controlador de MensajePersona

// exportamos una funcion que recibe la aplicacion 
module.exports = (app) => {
    // especificamos la ruta, y como segundo parametro la funcion que se va a ejecutar
    app.post('/MensajePersona', MensajePersonaController.createMensajePersona); //cuando se haga una peticion POST a /MensajePersona se ejecuta la funcion createMensajePersona del controlador
    app.get('/MensajePersona', MensajePersonaController.getAllMensajePersona); //cuando se haga una peticion GET a /MensajePersona se ejecuta la funcion getMensajePersona del controlador
    app.get('/MensajePersona/:id', MensajePersonaController.getMensajePersonaById); //cuando se haga una peticion GET a /MensajePersona se ejecuta la funcion getMensajePersona del controlador
    app.put('/MensajePersona/:id', MensajePersonaController.updateMensajePersona); //cuando se haga una peticion PUT a /MensajePersona se ejecuta la funcion updateMensajePersona del controlador
}




// Nota: en cada endponit que se realice se debe especificar la ruta aqui