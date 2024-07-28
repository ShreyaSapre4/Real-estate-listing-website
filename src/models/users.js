const mongoose=require('mongoose')
const user=mongoose.Schema({
    Name:String,
    Email:String,
    Username:String,
    Password:String
})

module.exports=mongoose.model("user",user)