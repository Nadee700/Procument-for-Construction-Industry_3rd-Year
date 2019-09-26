const express = require('express');
const router = express.Router();

const Supplier = require('../models/supplier');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling get requests to products'
    });
});

router.post('/',async(req,res,next)=>{
    const Supplier = new Supplier({
        id:req.body.id,
        name:req.body.name,
        address:req.body.address,
        phnNo:req.body.phnNo
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:err});
    }
})