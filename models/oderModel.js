const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    name:{type:"string",require},
    email:{type:"string",require},
    userid:{type:"string",require},
    orderItems:[],
    shipping:{type:Object},
    orderAmount:{type:Number,require},
    isDelivered:{type:Boolean,require},
    transactionId:{type:String,require},
},{
    timestamps:true,
})
module.exports=mongoose.model('orders',orderSchema)