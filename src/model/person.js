const mongoose = require('mongoose');
const schema = mongoose.Schema;


//Entidad
var personSchema = new schema({
    //Definir los atributos del modelo
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    edad: {
        type: Number
    },
    email: {
        type: String
    }
},{
    //Definir el nombre de la colección
    collection: 'PERSONAS'
});

//Exportar el modelo
module.exports = mongoose.model('PERSON', personSchema);

