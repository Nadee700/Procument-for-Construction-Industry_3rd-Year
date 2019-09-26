const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phnNo:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:true
    },
    address:{
        type:String
    }

});

module.exports = mongoose.model('user',userSchema);