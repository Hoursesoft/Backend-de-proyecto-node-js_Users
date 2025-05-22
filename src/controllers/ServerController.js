const person = require('../models/person');




class ServerController {
    //Constructor
    constructor() {

    }

//Método para registrar un usuario
    register(req, res) {
        person.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }


//Método para actualizar un usuario
    update(req, res) {
        let { id, nombre, apellido, edad, email } = req.body;
        let obj = { nombre, apellido, edad, email }
        person.findByIdAndUpdate(id, { $set: obj }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

//Método para eliminar un usuario
    deleteUser(req, res) {
        let { id } = req.body;
        person.findByIdAndDelete(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }


//Método para obtener un usuario por id
    getUsers(req, res) {
        let id = req.params.id;
        person.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }


//Método para obtener todos los usuarios
    getAllUsers(req, res) {
        //Obtener todos los usuarios
        person.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

}

//Exportar la clase
exports.default = ServerController;