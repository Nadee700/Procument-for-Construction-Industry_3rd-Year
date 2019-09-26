const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    pid:{
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
    tolBudget:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('product',productSchema);