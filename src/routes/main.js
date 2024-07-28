const express = require('express')
const routes = express.Router()
const buy = require('../models/buydb')
const rent = require("../models/rentdb")
const bodyParser = require('body-parser');
const buys=require('../models/buydb')
const user=require('../models/users')


routes.use(bodyParser.urlencoded({ extended: true }));

routes.get("/", (req, res) => {
    res.render('index');
})

routes.post('/login',async (req,res)=>{
    const details={
        Username:req.body.username,
        Password:req.body.password
    }
    const data=await user.find(details)
    if(data!=""){
        res.redirect('home')
    }else{
        res.redirect('/')
    }  
})

routes.post('/signup',async(req,res)=>{
    const details={
        Username:req.body.username_signup,
        Password:req.body.password_signup,
        Name:req.body.name,
        Email:req.body.email
    }
    if (details!="")
    {
        try{
            user.create(details)
        }catch{
            console.log('Error')
        }
    }
        res.redirect('/')
})
routes.get('/home', async (req,res)=>{
    res.render('index_logged')
})
routes.get('/error',(req,res)=>{
    res.render('error')
})
routes.get("/buy", async (req, res) => {
    const data = await buy.find();
    res.render('buy', { data })
})

routes.post("/buy_search",async(req,res)=>{
    const query={
        City:req.body.buy_search
    }
    const data=await buy.find(query)
    if(data==""){
        res.redirect('error')
    }else{
        res.render('buy_search',{data})
    }
    
})

routes.get("/rent", async (req, res) => {
    const data = await rent.find()
    res.render('rent', { data })
})

routes.post("/rent_search",async(req,res)=>{
    const query={
        City:req.body.rent_search
    }
    const data=await rent.find(query)
    if(data==""){
        res.redirect('error')
    }else{
        res.render('rent_search',{data})
    }
    
})

routes.get('/about', async(req,res)=>{
    res.render('about')
})

routes.get('/sell', (req, res) => {
    res.render('sell')
})


routes.post("/sell_post", async (req, res) => {
    const data ={
        Name: req.body.name,
        Image: req.body.image,
        City: req.body.city,
        Add: req.body.address,
        Area: req.body.area,
        Type: req.body.type,
        Cost: req.body.cost,
    };
    
    if (data.Name!="")
    {
        try{
            buys.create(data)
        }catch{
            console.log('Error')
        }

        res.redirect('/buy')
    }
    else{
        res.redirect('/')
    }
});

routes.get('/contact', async(req,res)=>{
    res.render('contact')
})

module.exports = routes