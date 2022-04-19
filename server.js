const express=require('express')
const app= express()
const Pizza=require('./models/pizzaModel')

const db=require('./db')

const pizzasRoute=require('./routes/pizzasRoute')

app.get('/',(req,res)=>{
    res.send("Server started");
})


app.use('/api/pizzas/',pizzasRoute)

const port=process.env.PORT||8000;
app.listen(port,()=>
console.log(`Server running on ${port}`));