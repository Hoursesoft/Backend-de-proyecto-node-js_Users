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
    collection: 'PERSONAS'
});

module.exports = mongoose.model('PERSON', personSchema);