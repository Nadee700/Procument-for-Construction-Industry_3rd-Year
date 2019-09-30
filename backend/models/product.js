const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    pid:{
        type:String,
    },
    siteName:{
        type:String,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    itemPrice:{
        type:Number,
        required:true
    },
    supplierName:{
        type:String,
        required:true
    },
    updatedAt:{
        type:Date
    }
});

module.exports = mongoose.model('product',productSchema);