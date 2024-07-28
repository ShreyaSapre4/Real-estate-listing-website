const mongoose=require('mongoose')
const buy=mongoose.Schema({
    Name:String,
    Image:String,
    City:String,
    Add: String,
    Area:String,
    Type: String,
    Cost:String
})

module.exports=mongoose.model("buy",buy)