const mongoose = require('mongoose');
const schema = mongoose.Schema;


//Entidad
var personSchema = new schema({
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
    collection: 'personas'
});

module.exports = mongoose.model('Persona', personSchema);
