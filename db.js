const mongoose = require('mongoose')

var mongoURL='mongodb+srv://sdev26:Devashish123@cluster0.uajno.mongodb.net/mern-pizza'
mongoose.connect(mongoURL)

var db=mongoose.connection
db.on('connection', ()=>{
    console.log(`Mongo Db Connected Successfully`)
})
db.on('error', ()=>{
    console.log(`Mongo Db Error`);
})
module.exports=mongoose
