import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap'
import Homescreen from './screens/Homescreen'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
    <Navbar/>
     
     <Homescreen/>
    </div>
  );
}

export default App;
