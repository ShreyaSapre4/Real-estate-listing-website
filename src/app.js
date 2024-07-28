const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes/main')
const hsb = require('hbs')
const mongoose=require('mongoose')
app.use('/static', express.static("static"))
app.use('', routes)

//setting view engine
app.set('view engine', 'hbs')
app.set('views', './templates')
hsb.registerPartials("templates/partials")

// Connect to the MongoDB database
const mongoURI = 'mongodb://127.0.0.1:27017/E-realtor';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
    const Buy = require('./models/buydb');
    const Rent=require("./models/rentdb")
    const user= require('./models/users')
    // const newUser=new user({
    //     Name:"Shreya Sare",
    //     Email:"shreyasapre4@gmail.com",
    //     Username:"shreya",
    //     Password:"12345678"
    // })

    // newUser.save()
    // .then(()=>{
    //     console.log("Saved")
    // })

})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

