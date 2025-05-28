const person = require('../models/person');




class ServerController {
    //𝕮𝖔𝖓𝖘𝖙𝖗𝖚𝖈𝖙𝖔𝖗 
    constructor() {

    }
///𝕭/ Registrar un usuario 
    register(req, res) {
        person.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }

 
//𝕭// Actualizar un usuario
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


   
//𝕭// Eliminar un usuario
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


   
//𝕭// Obtener un usuario por id
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

  //𝕭// Trear todos los usuarios
    getAllUsers(req, res) {
        person.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

}

exports.default = ServerController;

/* 𝕭𝖗𝖊𝖎𝖓𝖊𝖗𝕻𝖗𝖔𝖕𝖊𝖗𝖙𝖎𝖞  */