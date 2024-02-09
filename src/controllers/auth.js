const signUp = require('../models/signUp')
const bcryptjs = require('bcryptjs')
const validate = require('../middleware/validate')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

exports.signUp = async(req,res)=>{
    try {
       const {username,password} = req.body
       const exitsUser = await signUp.findOne({username})
       if(exitsUser){
        return res.json({
            sucess:true,
            message:"already exits username"
        })
       }
// secure password
    var hashpwd ;
       try {
      hashpwd = await bcryptjs.hash(password,10)
       } catch (error) {
            return res.status(500).json({
                sucess:false,
                message:'Error in hasing'
            })
       }
// save in DB1
       const user = await signUp.create({username,password:hashpwd});
       return res.json({
        sucess:true,
        data:user
       })
       
    }catch(err){
        return res.json({
            sucess:false,
            data:"Error"
        })
    }
    
}


exports.signIn = async(req,res)=>{
    try{
        const {username,password} = req.body
        if(!username || !password){
            return res.json({
                message:'field required'
            })
        }
        const user = await signUp.findOne({username})
        if(!user){
            return res.json({
                sucess:false,
                message:'user not found'
            })
        }
        const payload = {
            username :user.username,
            id :user._id
        }
        // match pwd and JWT
        if(await bcryptjs.compare(password,user.password)){
            
            let token = jwt.sign(payload,
                process.env.JWT_SEC,{
                expiresIn:"2h"
            })
    
            user.token = token;
            user.password = undefined;

            console.log(user);
    
            const options = {
                expires:new Date(Date.now()+3*24*60*60*1000)
            }
            res.cookie("token",token,options).json({
                sucess:true,
                token,
                user,
                message:'sucessfully created'
            })
        }
        else{
            return res.json({
                sucess:false,
                message:'password does not match'
            })
        }
    }catch(err){
         return res.json({
                sucess:false,
                message:err.message
            })
    }
}