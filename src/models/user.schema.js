const mongoose = require('mongoose');
const myScema =  new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
   
},
{ versionKey: false });

const user = mongoose.model("user", myScema);
module.exports = user;

