require('dotenv').config()
const express=require('express')
const app=express()
const port=5000

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/facebook',(req,res)=>{
    res.send('MY FACEBOOK')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login </h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>My You Tube</h2>')
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${process.env.PORT}`);
})