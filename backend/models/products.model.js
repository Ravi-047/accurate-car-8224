const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    title:String,
    image1:String,
    image2:String,
    image3:String,
    image4:String,
    oprice:String,

    
    
    code:String,
    gender:String,
    category:String,
    dprice:String
   
})

const  ProductModel=mongoose.model("product",productSchema)

module.exports={
    ProductModel
}



