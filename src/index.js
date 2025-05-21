const mongoose = require('mongoose');
const express = require('express');
const serverRouter = require('./routers/serverRouter');

class Server {
    constructor() {
        this.app = express(); 
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express.json()); 

       
        const router = express.Router();

        router.get('/', (req, res) => {
            console.log("Nueva conexión");
            res.status(200).json({ message: "Hola mundo!" });
        });

        this.app.use('/', router);

       
        const serverR = new serverRouter.default();

        this.app.use(serverR.router);

        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor corriendo en el puerto", this.app.get('port'));
        });
    }
}

const objServer = new Server();