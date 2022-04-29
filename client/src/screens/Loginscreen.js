import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Loader from '../components/Loader.js'
import Error from '../components/Error'
function LoginScreen() {
    
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [loading, setloading]=useState(false)
    const [error, seterror]=useState()

    async function login(){
        const user={
       
          email,
          password
      }
        try {
          setloading(true)
          const result = await (await axios.post('/api/users/login',user)).data
          localStorage.setItem('currentUser',JSON.stringify(result))
          window.location.href='/'
        } catch (error) {
          seterror(true)
          setloading(false)
          console.log(error);
          
        }
      }
  
    return ( 
        <div>
            {loading &&(<Loader/>)}
            <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5">
            {error && (<Error message="Invalid credentials"/>)}

                    <div className="bs">
                    <h2 >Login</h2>
                    
                    <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    <input type="text" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                   
                    <br/>
                    <button className="btn btn-primary" onClick={login}>Login</button>
                    </div>

            </div>
            </div>
        </div>
     );
}

export default LoginScreen;