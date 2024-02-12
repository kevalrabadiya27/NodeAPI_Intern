const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config();

exports.authentication = async(req,res,next)=>{
         try {
            const token = req.header('Authorization').replace('Bearer',"");
            if(!token){
                res.json({
                    message:"token missing"
                })
            }      
            const payload = jwt.verify(token,process.env.JWT_SEC,(err)=>{
                if(err){
                    console.log(err);
                }
            })

        } catch (error) {
            return res.json({
                sucess:false,
                message:'invalid token'
            })
        }
           next();
       
}