import { useSelector, useDispatch } from 'react-redux';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa'
import {addToCart} from '../actions/cartActions'
import {deleteFromCart} from '../actions/cartActions'
export default function CartScreen() {

    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems
    var subtotal=cartItems.reduce((x,item)=>x+item.price,0)
    const dispatch=useDispatch();
    function checkout(){

    }
    return (


        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 style={{ fontSize: '30px' }}>My Cart</h2>

                    {cartItems.map(item => {
                        return <div className="flex-container">
                            <div className="text-left m-1 w-100">
                                <h1>{item.name}[{item.varient}]</h1>
                                <h3>Price: {item.quantity}*{item.prices[0][item.varient]}={item.price}</h3>
                                <h1 style={{ display: 'inline' }}>Quantity:
                                    <FaPlus style={{ fill: 'green' }}
                                        onClick={() => {dispatch(addToCart(item,item.quantity+1,item.varient)) }}
                                    /> {item.quantity} 
                                    <FaMinus style={{ fill: 'red' }}
                                    onClick={() => {dispatch(addToCart(item,item.quantity-1,item.varient)) }}
                                    /></h1>
                                <hr />
                            </div>
                            <div className=" m-1 w-100">

                                <img src={item.image} style={{ height: '80px', width: '80px' }} />
                            </div>
                            <div className=" m-1 w-100 mt-5">

                                <FaTrashAlt style={{ fill: 'red' }} 
                                onClick={()=>dispatch(deleteFromCart(item))}
                                />
                            </div>
                        </div>
                    })}

                </div>
                <div className="col-md-4 text-right">
                    <h2 style={{fontSize: '45px'}}>Subtotal : {subtotal}/- </h2>
                    <button className="btn btn-danger"onClick={checkout} ><a href='/address'style={{textDecoration: 'none',color:'white'}}>Check Out</a></button>
                </div>
            </div>
        </div>
    )
}