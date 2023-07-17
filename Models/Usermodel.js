// Importing External Packages

const mongoose=require("mongoose")

// .................User Schema.........................

const UserSchema=mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true}
})

// .................User Model.........................

const UserModel=mongoose.model("user",UserSchema)


module.exports={
    UserModel
}