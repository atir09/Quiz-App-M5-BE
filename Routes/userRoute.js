// Importing External Packages

const express=require("express")
require('dotenv').config()

// Importing Model

const {UserModel}=require("../Models/Usermodel.js")

// ...............................................................
const UserRoute =express.Router()


// ..................Register User.............

UserRoute.post("/",async(req,res)=>{
    const {email,username}=req.body
    try {
        let isUser=await UserModel.findOne({email})
        if(isUser){
            res.status(201).send({msg:`Welcome ${username}`})
            return
        }
    
        let user=new UserModel({email,username})

        await user.save()    
        res.status(201).send({msg:`Welcome ${username}`})

    } catch (error) {
        console.log(error)
        res.status(501).send({msg:"Server Error",error:error.message})
        
    }
})




module.exports={
    UserRoute
}