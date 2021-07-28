const mongoose = require('mongoose');

const employeeScheme = mongoose.Schema({
    name: {
        type: String,
        requied: true,
        trim:true
    },
    email:{
        type: String,
        requied: true
    },
    password:{
        type: String,
        requied: true
    }
})
const employeeModel = mongoose.model("Employee", employeeScheme)

module.exports = employeeModel