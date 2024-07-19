const mongoose = require('mongoose');

const stuSchema  = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword : String,
})
module.exports =  mongoose.model('customer',stuSchema)