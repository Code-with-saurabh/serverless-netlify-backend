const express = require("express")
// const serverless = require("serverless-http")

const app = express()

app.get("/",(req,res)=>{
    res.json({
        status:true,
        message:"Hello Uet Its wroks",
        data:{User:process.env.USERNAME,Key:process.env.MY_SECRET_KEY}
    })
})


module.exports = app;