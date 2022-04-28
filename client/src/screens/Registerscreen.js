import { useState, useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {registerUser} from '../actions/userActions'

export default function Registerscreen() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('')

    const dispatch= useDispatch()


    function register(){
        if(password!=cpassword){
            alert('Passwords do not match')
        }
        else{
            const user={
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h2 style={{ fontSize: '35px' }}>Register </h2>
                    <div className="text-left">
                        <input type="text"
                            className="form-control"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => { setname(e.target.value) }}
                        />
                        <input type="text" className="form-control" placeholder="E-mail" 
                        value={email}
                        onChange={(e) => { setemail(e.target.value) }}
                        />
                        <input type="text" className="form-control" placeholder="Password" 
                        value={password}
                        onChange={(e) => { setpassword(e.target.value) }}/>
                        <input type="text" className="form-control" placeholder="Confirm Password"
                        value={cpassword}
                        onChange={(e) => { setcpassword(e.target.value) }}
                        />
                        <button className="btn btn-danger mt-2 " onClick={register}>Register</button>
                    </div>

                </div>
            </div>
        </div>
    )
}