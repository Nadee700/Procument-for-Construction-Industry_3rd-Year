const express =  require('express');
const router = express.Router();
const Product = require('../models/product');


//Get all the REQUISITION Deatails
router.get('/',async (req,res)=>{
    try{
        const product = await Product.find();
        res.json(product);
    }catch(err){
        res.json({message:err});
    }
   
});

// Sumbit a REQUISITION Details
router.post('/',async (req,res)=> {
 //  console.log(req.body);
    const productDetails = new Product({
        siteName:req.body.siteName,
        itemName:req.body.itemName,
        itemPrice:req.body.itemPrice,
        quantity:req.body.quantity,
        supplierName:req.body.supplierName,
    });

    productDetails.save()
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

    router.patch('/:productId',async(req,res) =>{
        try{
            const updatedPost = await Post.updateOne(
                {_id:req.params.productId},
                {$set :{itemName:req.body.itemName}});
            res.json(updatedPost);
        }catch(err){
            res.json({message:err});
        }
    });
    
});



module.exports = router;
