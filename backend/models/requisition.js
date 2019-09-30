const mongoose = require('mongoose');

const requisitionSchema = mongoose.Schema({

    id:{
        type:String,
    },
    userId:{
        type:String
    },
    siteName:{
        type:String,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    perAgreedPrice:{
        type:Number,
        required:true
    },
    perApprovedSupplier:{
        type:String,
        required:true
    },
    AccountNo:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('requisitions',requisitionSchema);