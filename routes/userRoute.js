const express = require('express');
const router=express.Router()
const User=require('../models/userModel')

router.post('/register',async(req,res)=>{
    const {name,email,password} = req.body
    const newUser=new User({name,email,password})
    
    try{
        newUser.save() 
        res.send('User Registered Successfully')
    }catch(err){
        return res.status(400).json({message:err})
    }

});
router.post('/login',async(req,res)=>{
    const {name,email,password} = req.body
    try{
        const user=await User.find({email,password})
        if(user.length > 0){
            res.send(user[0])
        }
        else{
            return res.status(400).json({message:'User Login Failed'});
        }

    }catch(err){return res.status(400).json}
})
module.exports=router 