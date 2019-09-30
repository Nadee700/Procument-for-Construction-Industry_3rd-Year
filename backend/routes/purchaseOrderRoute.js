const express =  require('express');
const router = express.Router();
const PurchaseOrder = require('../models/purchaseOrder');


//Get all the REQUISITION Deatails
router.get('/',async (req,res)=>{
    try{
        const purchase = await PurchaseOrder.find();
        res.json(purchase);
    }catch(err){
        res.json({message:err});
    }
   
});

// Sumbit a REQUISITION Details
router.post('/',async (req,res)=> {
 //  console.log(req.body);
    const purchaseDetails = new PurchaseOrder({
        siteName:req.body.siteName,
        itemName:req.body.itemName,
        type:req.body.type,
        quantity:req.body.quantity,
        total:req.body.total,
        deliveryDate:req.body.deliveryDate
    });

    purchaseDetails.save()
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
