const mongoose = require('mongoose');

const supplierSchema = mongoose.Schema({

    sid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('supplier', supplierSchema);