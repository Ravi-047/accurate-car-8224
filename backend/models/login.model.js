const mongoose = require("mongoose")

const loginSchema=mongoose.Schema({

    mobile:Number,
    email:String,
    name: String,
    lastname:String,
    password:String,
    DOB : String,
    gender:String,
    confirmpassword:String
    
},{
    versionKey:false
})

const LoginModel=mongoose.model("login",loginSchema)

module.exports={
    LoginModel
}