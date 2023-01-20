const mongoose=require("mongoose")

const cartSchema=mongoose.Schema({
    
    title:String,
    image1:String,
    image2:String,
    image3:String,
    image4:String,
    oprice:String,
    gender:String,
    category:String,
    dprice:String,
    code:String,
    userID:String
})

const  CartModel=mongoose.model("cart",cartSchema)

module.exports={
    CartModel
}



