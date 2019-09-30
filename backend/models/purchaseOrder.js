const mongoose = require('mongoose');

const purchaseOrderSchema = mongoose.Schema({

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
    total:{
        type:Number,
        required:true
    },
    deliveryDate:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.model('purchaseOrder',purchaseOrderSchema);