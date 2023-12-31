/** packages */
const mongoose = require("mongoose");


/** Schema creation */
const athleteSchema = new mongoose.Schema({
    nombres: {
        type: "String", 
        required: true,
    },

    apellidos: {
        type: "String", 
        required: true, 
    }, 

    genero: {
        type: "String",
        required: true,
    },

    edad: {
        type: "Number",
        required: true, 
        min: 0
    },

    peso: {
        type: "Number",
        required: true, 
        min: 0, 
    },

    estatura: {
        type: "Number",
        required: true,
        min: 0
    },

    nacionalidad: {
        type: "String",
        required: true,
    },

    deporte: {
        type: "String",
        required: true, 
    }, 

    club:{
        type: "String",
        required: true,
    }, 

    salario: {
        type: "Number",
        required: true,
    }
})

/** Schema exportation */
module.exports = athleteSchema; 