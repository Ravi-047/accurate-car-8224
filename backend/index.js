const mongoose=require("mongoose")
const express=require("express")
const { connection } = require("./configs/db")
const {authenticate}=require("./middleware/Authenticate")
const { loginRouter } = require("./routes/login.route")
const cors=require("cors")
const { cartRouter } = require("./routes/cart.route")
const { productRouter } = require("./routes/products.route")
require("dotenv").config()

const app=express()

app.use(cors())
app.use(express.json())
app.use("/login",loginRouter)
app.use("/product",productRouter)
app.use(authenticate)
app.use("/cart",cartRouter)

app.listen(process.env.port,async ()=>{
    try {
        await connection
        console.log("Connected to db")
    } catch (error) {
        console.log(error)
    }
})

