import React from 'react';
import './final.css'
import ReactDOM from 'react-dom';
import {useDispatch, useSelector} from 'react-redux'
export default function FinalScreen(){
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const cartstate = useSelector(state => state.cartReducer)
   
    const a=[]
    function hel(){
        
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    const cartItems= cartstate.cartItems
    console.log(cartItems)
    var sub=cartItems.reduce((x,item)=>x+item.price,0)
    return(
        <div>
        <h1>
     
       {user?(
           <>
           
           <h2 style={{fontWeight: 'bold'}}>Sit back and relax while we deliver your order</h2>
         
           <hr/>
           <h1>Dear {user.name} here is the invoice for your recent order{cartItems._id}</h1>
           <div className="row" style={{}}>
           {cartItems.map(item=>{
               return <div className="col-md-6">
               <h1>{item.name}</h1>
               <img src={item.image} style={{height: '180px', width: '180px'}}/>
               <h1>Price Rs<br/> {item.price}*{item.quantity}</h1>
               </div>
           })}
           <h1>Subotal:Rs{sub}/-</h1>
           </div>
           <h1>Thank You for placing your order with us.<br/>Have a Great Day!!</h1>
           </>
       ):(<>
        <h1>Please Login to view your order deatils</h1>
        </>)
    
    }
        </h1>
        </div>
    )
}