const express =  require('express');
const router = express.Router();
const Supplier = require('../models/supplier');


//Get all the SUPPLIERS Deatails
router.get('/',async (req,res)=>{
    try{
        const addSupplier = await Supplier.find();
        res.json(purchase);
    }catch(err){
        res.json({message:err});
    }
   
});

// Sumbit a SUPPLIERS Details
router.post('/',async (req,res)=> {
 //  console.log(req.body);
    const SupplierDetails = new Supplier({
        companyName:req.body.companyName,
        siteName:req.body.siteName,
        email:req.body.email,
        regNo:req.body.regNo,
        cNo:req.body.cNo,
        cPerson:req.body.cPerson,
       
    });

    SupplierDetails.save()
    .then(data =>{
        res.json(data);
       console.log('save data to db');
    })
    .catch(err=> {
        res.json({message:err});
    })

    // try{
    //     const savedDetails = await regDetails.save();
    //     res.json(savedDetails);
    // }catch(err){
    //     res.json({message:err});
    // }
});

module.exports = router;
