
exports.validate = async(req,res,next)=>{
    const {password} = req.body

    if(password.length<4){
        return res.json({
            sucess:false,
            message:'password required more than 4 digit'
        })
    }
    next();
}

