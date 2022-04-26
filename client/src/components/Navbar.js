import '../App.css'
import {FaShoppingCart,} from 'react-icons/fa';
import {useSelector,useDispatch} from 'react-redux'
import {
    useNavigate
   } from "react-router-dom";
  import Test from './Test'
   
function Navbar() {
    const navigate=useNavigate
    const handleClick=()=>{
      navigate("/");
    }
    const cartstate=useSelector(state=>state.cartReducer)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-white rounded">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" onClick={handleClick}>MERN Pizza</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cart"><FaShoppingCart/>
                                {cartstate.cartItems.length}
                                </a>
                            </li>
                          
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;