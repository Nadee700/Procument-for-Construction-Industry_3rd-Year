const express =  require('express');
const router = express.Router();
const Register = require('../models/user');


//Get all the REGISTER Deatails
router.get('/',async (req,res)=>{
    try{
        const register = await Register.find();
        res.json(register);
    }catch(err){
        res.json({message:err});
    }
   
});

// Sumbit a REGISTER Details
router.post('/registerDetails',async (req,res)=> {
 //  console.log(req.body);
    const regDetails = new Register({
        userName : req.body.userName,
        password: req.body.password,
        confirmPassword:req.body.confirmPassword,
        email:req.body.email
    });
    

    // post.save()
    // .then(data =>{
    //     res.json(data);
    // })
    // .catch(err=> {
    //     res.json({message:err});
    // })

    try{
        const savedDetails = await regDetails.save();
        res.json(savedDetails);
    }catch(err){
        res.json({message:err});
    }
});

// //specific post
// router.get('/:postId',async (req,res) => {
//    // console.log(req.params.postId);
//     try{
//         const post = await Post.findById(req.params.postId);
//         res.json(post);
//     }catch(err){
//         res.json({message:err});     
//     }
// });

// //Delete a post
// router.delete('/:postId',async(req,res)=>{
//     try{
//         const removedPost = await Post.remove({_id:req.params.postId});
//         res.json(removedPost);
//     }catch(err){
//         res.json({message:err});
//     }
// });

// //Update a post
// router.patch('/:postId',async(req,res) =>{
//     try{
//         const updatedPost = await Post.updateOne(
//             {_id:req.params.postId},
//             {$set :{title:req.body.title}});
//         res.json(updatedPost);
//     }catch(err){
//         res.json({message:err});
//     }
// });

module.exports = router;
