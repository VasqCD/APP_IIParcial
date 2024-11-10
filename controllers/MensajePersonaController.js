// este archivo se encarga de manejar las peticiones que se hacen a la base de datos
// todos los request que se hagan

// primero se debe importar el modelo
const MensajePersona = require("../models/MensajePersona");

//REST
// POST: PARA CREAR REGISTROS EJ: /esquema
// PUT: PARA ACTUALIZAR REGISTROS EJ: /esquema/:id
// DELETE: PARA ELIMINAR REGISTROS EJ: /esquema/:id
// GET: CONSLTA GENERAL EJ: /esquema?
// GET: CONSULTA ESPECIFICA EJ: /esquema/:id
// PATCH: PARA ACTUALIZAR UN CAMPO ESPECIFICO EJ: /esquema/:id

//Status: respuestas del servidor
/*
200 - 299: Todo salio bien
300 - 399: Redirecciones
400 - 499: Errores del cliente / error en la peticion
500 - 599: Errores del servidor
*/

// crear unregistro

exports.createMensajePersona = async (req, res) => {
    //async para que sea asincrona ya que conecta con la base de datos no es instantaneo
    try {
        // se obtienen los datos que se reciben en la peticion
        let pNombre = req.body.nombre;
        let pMensaje = req.body.mensaje;
        let pEdad = req.body.edad;

        // se crea un nuevo objeto de la clase MensajePersona con los datos que se reciben
        const mensaje = new MensajePersona({
            nombre: pNombre,
            mensaje: pMensaje,
            edad: pEdad,
        });

        // Validar que no queden campos vacios o nulos

        /*
                se puede validar de dos formas diferentes 
                1. Validar cada campo por separado
                2. Validar todos los campos al mismo tiempo
        
                En este ejemplo se esta validando todos los campos al mismo tiempo
        
                ej:
                    if(!pNombre || !pMensaje || !pEdad){
                    return res.status(400).send({message: 'Todos los campos son obligatorios'}); //se envia un mensaje de error al cliente
                }
                    */

        //se valida cada campo por separado
        if (!pNombre) {
            res.status(400).send("El nombre es obligatorio");
            return;
        }

        if (!pMensaje) {
            res.status(400).send("El mensaje es obligatorio");
            return;
        }

        if (!pEdad) {
            res.status(400).send("La edad es obligatoria");
            return;
        }

        // se guarda el objeto en la base de datos
        const mensajeGuardado = await mensaje.save();
        res.status(200).send(mensajeGuardado); //se envia el objeto guardado al cliente
    } catch (err) {
        //si hay un error
        console.log("Error en createMensajePersona: ", err); //se imprime el error en la consola
        res.status(500).send({ message: "Error en el servidor" }); //se envia un mensaje de error al cliente
    }
};

// creado el servico de consulta general de registros

exports.getAllMensajePersona = async (req, res) => {
    try {
        //obtener todos los registros de la base de datos
        const mensajes = await MensajePersona.find();
        res.status(200).send(mensajes); //se envian los registros al cliente
    } catch (err) {
        //si hay un error
        console.log("Error en getMensajePersona: ", err); //se imprime el error en la consola
        res.status(500).send({ message: "Error en el servidor" }); //se envia un mensaje de error al cliente
    }
};

// creado el servicio de consulta especifica de registros
exports.getMensajePersonaById = async (req, res) => {
    try {
        const { id } = req.params; //obtener el id de la url

        //obtener el registros de la base de datos por el id
        const mensajePersona = await MensajePersona.findById(id);

        //validar si el registro existe
        if (mensajePersona) {
            res.status(200).send(mensajePersona); //se envia el registro al cliente
        } else {
            res.status(404).send({ message: "Mensaje no encontrado" }); //se envia un mensaje de error al cliente
        }
    } catch (err) {
        //si hay un error
        console.log("Error en getMensajePersonaById: ", err); //se imprime el error en la consola
        res.status(500).send({ message: "Error en el servidor" }); //se envia un mensaje de error al cliente
    }
};
//nota: con el metodo get no se puede enviar variables en el body de la peticion, se deben enviar por la url
//hay dos tipos: query params y path params

// creado el servicio de actualizacion de registros

exports.updateMensajePersona = async (req, res) => {
    try {
        const { id } = req.params; //obtener el id de la url

        // se obtienen los datos que se reciben en la peticion
        let pNombre = req.body.nombre;
        let pMensaje = req.body.mensaje;
        let pEdad = req.body.edad;

        // se crea un objeto con los datos que se reciben
        const mensaje = {
            nombre: pNombre,
            mensaje: pMensaje,
            edad: pEdad,
        };

        // Validar que no queden campos vacios o nulos
        if (!pNombre) {
            res.status(400).send("El nombre es obligatorio");
            return;
        }

        if (!pMensaje) {
            res.status(400).send("El mensaje es obligatorio");
            return;
        }

        if (!pEdad) {
            res.status(400).send("La edad es obligatoria");
            return;
        }

        // se actualiza el registro en la base de datos
        const actualizarMensajePersona = await MensajePersona.findByIdAndUpdate(
            id,
            mensaje
        );

        if (actualizarMensajePersona) {
            res.status(200).send(actualizarMensajePersona); //se envia un mensaje de exito al cliente
            return;
        } else {
            res.status(404).send({ message: "Mensaje no encontrado" }); //se envia un mensaje de error al cliente
            return;
        }
    } catch (err) {
        //si hay un error
        console.log("Error en updateMensajePersona: ", err); //se imprime el error en la consola
        res.status(500).send({ message: "Error en el servidor" }); //se envia un mensaje de error al cliente
    }
};

// creado el servicio de eliminacion de registros
// usando funcion flecha asinrona

exports.deleteMensajePersona = async (req, res) => {
    try {
        const { id } = req.params; //obtener el id de la url que se recibe

        //eliminar el registro de la base de datos
        const deleteMensajePersona = await MensajePersona.findByIdAndDelete(id);
        if (deleteMensajePersona) {
            res.status(200).send(deleteMensajePersona); //se envia un mensaje de exito al cliente
            return;
        } else {
            res.status(404).send("Mensaje no encontrado con el id especificado" ); //se envia un mensaje de error al cliente
            return;
        }
    } catch (err) {
        console.log("Error en deleteMensajePersona: ", err);
        res.status(500).send("Error en el servidor");
    }
};
