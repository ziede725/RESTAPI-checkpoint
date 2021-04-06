const express= require('express') ; 
const mongoose= require('mongoose') ;
const connection =require('dotenv/config') 
const user = require('./models/User')
const userRoute = require('./routes/router');
const bodyParser = require('body-parser');
const app = express() ; 
app.use(bodyParser.json())
app.use('/user',(userRoute))
mongoose.connect(`mongodb+srv://zied:${process.env.DB_PSSWRD}@cluster0.x7ki2.mongodb.net/RESTAPI?retryWrites=true&w=majority` ,{useNewUrlParser: true ,useUnifiedTopology: true },()=>console.log('we are connected'))

app.listen(3000,()=>console.log('we are listening to port')) 