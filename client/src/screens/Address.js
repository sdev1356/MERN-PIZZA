import React, {useState, useEffect} from 'react';
import FinalScreen from'./FinalScreen'
import { useNavigate } from "react-router-dom";
export default function Address(){
    const user=JSON.parse(localStorage.getItem('currentUser'))
    const [city,setCity]=useState('') 
     let navigate = useNavigate(); 
    const [order,setOrder]=useState('')
    function areaCheck() {
        const v=city.toLowerCase()
        if(user==null){
            alert('Login into your account before placing order')
        }
        else if(v==''){
            alert(`Please enter the details first`)
        }
        else if(v=='panchkula'||v=='mohali'||v=='chandigarh'){
      alert(`Order placed check the my order section for more details`)
      let path = `/final`; 
    navigate(path);
        }
        else{
            alert("Order cancelled due to distance limitation")
        }
    }
  

    return(
        
        <div>
        <div className="row justify-content-center">
        <div className="col-md-5">
            <h2 style={{ fontSize: '35px' }}>Address </h2>
            <p>Please note that we deliver only in Tricity and not outside that.Any order outside the area will automatically be cancelled</p>
            <div className="text-left">
                <input type="text"
                    className="form-control"
                    placeholder="House No"
                    style={{marginTop:'5px'}}
                    required="required"
                />
                <input type="text" className="form-control" placeholder="Sector" 
                style={{marginTop:'15px'}}
               
                />
                <input type="text" className="form-control" placeholder="City"
                style={{marginTop:'15px'}}
                value={city}
                onChange={(e) => { setCity(e.target.value) }}
                />
                
                <input type="text" className="form-control" placeholder="Landmark(optional)"
                style={{marginTop:'15px'}}
                />
                <button className="btn btn-danger mt-2 "onClick={areaCheck} ><a link='/final'>Place Order</a></button>
               
               
            </div>

        </div>
    </div>
        </div>
    )
}