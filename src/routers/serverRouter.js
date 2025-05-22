const express = require('express');
const serverController = require("../controllers/ServerController");


//Rutas o endpoints
class ServerRouter{
    //Constructor
    constructor(){
        this.router = express.Router();
        this.config();
    }

    //Método para definir las rutas
    config(){
        const objServerC = new serverController.default();
        //Definir las rutas
        this.router.get("/users", objServerC.getAllUsers);
        this.router.get("/users/:id", objServerC.getUsers);
        this.router.post("/users", objServerC.register);
        this.router.put("/users", objServerC.update);
        this.router.delete("/users", objServerC.deleteUser);        
    }
}

//Exportar la clase
exports.default = ServerRouter;