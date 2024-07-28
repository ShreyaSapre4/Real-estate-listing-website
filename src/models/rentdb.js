const mongoose = require('mongoose')
const rent=mongoose.Schema({
    Name:String,
    Image:String,
    City:String,
    Add: String,
    Area:String,
    Type: String,
    Cost:String,
    Furnished:String
})

module.exports=mongoose.model('rent',rent)