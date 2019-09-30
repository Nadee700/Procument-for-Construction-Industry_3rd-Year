const express =  require('express');
const router = express.Router();
const Register = require('../models/user');


//Get all the REGISTER Deatails
router.post('/user',(req,res)=>{
        Register.findOne({email:req.body.email}).then(user=>{
            if (user.password == req.body.password){
                res.json(user)                
            }else{
                res.json({"message":"user password incorrect"}) 
            }
        }).catch(err =>{
            res.json({"message":"user not found"})
        })
   
});

router.get('/',async (req,res)=>{
    try{
        const register = await Register.find();
        res.json(register);
    }catch(err){
        res.json({message:err});
    }
   
});

// Sumbit a REGISTER Details
router.post('/',async (req,res)=> {
 //  console.log(req.body);
    const regDetails = new Register({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phnNo:req.body.phnNo,
        password:req.body.password,
        email:req.body.email,
        role:req.body.role
    });

    regDetails.save()
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
