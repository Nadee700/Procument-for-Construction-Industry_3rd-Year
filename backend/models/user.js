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
       
    },
    address:{
        type:String,
        
    },
    role:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('users',userSchema);