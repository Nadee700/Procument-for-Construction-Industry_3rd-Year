const mongoose = require('mongoose');

const requisitionSchema = mongoose.Schema({

    id:{
        type:String,
        required: true
    },
    userId:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('requisition',requisitionSchema);