import '../App.css'
import {FaShoppingCart,} from 'react-icons/fa';
import {useSelector,useDispatch} from 'react-redux'
import {
  useNavigate
 } from "react-router-dom";
export default function Navbar() {

  const cartstate=useSelector(state=>state.cartReducer)

  const user = JSON.parse(localStorage.getItem('currentUser'))
function logout(){
  localStorage.removeItem('currentUser')
  window.location.reload()
}
  return (
    <div>
      <nav class="navbar navbar-expand active navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Mern Pizza</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" style={{color:'white'}}></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div>
          <ul>
          
          </ul>
          </div>
            <ul class="navbar-nav  ml-auto mr-5">
              {user ? (<>
                <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {user.name}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                
                  <a class="dropdown-item" onClick={logout}>Logout</a>
                  <a class="dropdown-item" href='/final'>My orders</a>
                
                </div>
              </div>

              </>) : (<>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/register">Register</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active " href="/login">Login</a>
                </li>
              </>)}
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
  )
}