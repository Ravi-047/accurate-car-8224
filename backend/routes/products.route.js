const express=require("express")
const { ProductModel } = require("../models/products.model")

const productRouter=express.Router()

productRouter.get("/get",async(req,res)=>{
    let query=req.query
    
    
    let data;

    if(query.gender!==undefined && query.category!=undefined){
        data=await ProductModel.find({$and:[{category:query.category},{gender:query.gender}]})


    }else if(query.gender!==undefined){
        data=await ProductModel.find({gender:query.gender})
    }else if(query.category!==undefined){
        data=await ProductModel.find({category:query.category})
    }else{
        data=await ProductModel.find()
    }
    res.send(data)
})


productRouter.get("/get/:id",async(req,res)=>{
    let id=req.params.id
    let data=await ProductModel.find({_id:id})
    res.send(data)
})

productRouter.post("/post",async(req,res)=>{
    let data=req.body
    let Product=new ProductModel(data)
    await Product.save()


    // await ProductModel.insertMany([])
    
    res.send("Added Successfully.")
})

productRouter.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id
    await ProductModel.findByIdAndDelete(id)
    res.send("Deleted Successfully.")
})

module.exports={
    productRouter
}



