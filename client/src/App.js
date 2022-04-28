import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap'
import Homescreen from './screens/Homescreen'
import Navbar from './components/Navbar'
import Test from './components/Test'
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import CartScreen from './screens/CartScreen';
import Registerscreen from './screens/Registerscreen'
import Loginscreen from './screens/Loginscreen';

function App() {
  return (
    <div className="App">
    <div className="routes">
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homescreen/>}/>
     <Route exact path='/cart'  element={<CartScreen/>}/>
     <Route exact path="/register" element={<Registerscreen/>}/>
      <Route exact path="/login" element={<Loginscreen/>}/>
    </Routes>
    </BrowserRouter>
   
     
     </div>
    </div>
  );
}

export default App;
