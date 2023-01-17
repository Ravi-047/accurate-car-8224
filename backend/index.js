
const mongoose=require("mongoose")

const express=require("express")

const { connection } = require("./configs/db")

const { loginRouter } = require("./routes/login.route")

const cors=require("cors")

require("dotenv").config()

const app=express()

app.use(cors())

app.use(express.json())

app.use("/login",loginRouter)




app.listen(process.env.port,async ()=>{
    try {
        await connection
        console.log("Connected to db")
    } catch (error) {
        console.log(error)
    }
})

