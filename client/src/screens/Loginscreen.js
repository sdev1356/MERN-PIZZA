import {useEffect,useState} from 'react'
export default function Loginscreen() {
    const [email,setemail] =useState('')
    const [password,setpassword] =useState('')
    function login(){
        
    }
    return (
        
        <div>
        <div className="row justify-content-center">
        <div className="col-md-5">
            <h2 style={{ fontSize: '35px' }}>Login </h2>
            <div className="text-left">
              
                <input type="text" className="form-control" placeholder="E-mail" 
                value={email}
                onChange={(e) => { setemail(e.target.value) }}
                />
                <input type="text" className="form-control" placeholder="Password" 
                value={password}
                onChange={(e) => { setpassword(e.target.value) }}/>
               
                <button className="btn btn-danger mt-2 " onClick={login}>Login</button>
            </div>

        </div>
    </div>
        
        </div>
    )
}