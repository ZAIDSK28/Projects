import {useReducer, useState} from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import axios from "axios"; 
import Login from '../Login';
import './Hospital.css'

const init = {
    hospname: "",
    contactno: "",
    email:"",
    address:"",
    pwd:""
}

const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val};
        case 'clear' :
            return init;   
    }
}

let RegHospital =  () => {
    const [hospital, dispatch] = useReducer(reducer, init);
    let navigate = useNavigate();

    const [password, errorPassword] = useState("");
    const [name, errorName] = useState("");
    const [contact, errorContact] = useState();
    const [hemail, setEmail] = useState("");


    const sendData = (e) => {
        var count = 0;

        if (!hospital.pwd.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) errorPassword("Password is not strong");
        else {
          errorPassword("");
          count++;
        }
    
        if (!hospital.hospname.match( /^[A-Z]{1}[A-Za-z]{1,}\s[A-Z]{1}[A-Za-z]{1,}/)) errorName("Enter valid Name");
        else {
          errorName("");
          count++;
        }
    
        if (!hospital.contactno.match(/[0-9]{10}/)) errorContact("Enter valid Contact");
        else {
          errorContact("");
          count++;
        }
    
        if (!hospital.email.match(/^[a-z][a-z0-9]{1,}@[a-z]{1,}\.[a-z]{1,}$/)) setEmail("Enter valid Email");
        else {
          setEmail("");
          count++;
        }
        if (count === 4) {
        e.preventDefault();
        axios
        .post("http://localhost:8080/hospital/registerhospital", hospital)
        .then((response) => {
          if (response.status === 200) {
            alert("Hospital Successfully Registered");
            navigate('/login');
          }
        })
        .catch((error) => {
          //     console.log(error);
          alert("Username already exist try another");
        });
    }
    }

    return (
        <div className="main-div" >
           
            <form className="column sub-div">
            <h4 className="text-center brand-color"> <u>HOSPITAL REGISTRATION FORM</u> </h4><br></br>
            
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Hospital Name : </label>
                <div className='col-sm-5'>
                <input type="text" required className='form-control' name="hospname" value={hospital.hospname}
                onChange={ (e)=>{dispatch({type: 'update', field: 'hospname', val: e.target.value })} }  placeholder="Hospital Name" />
                 <h6 className="text-danger text-center">{name}</h6>
                </div>
                </div>
                
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Mobile Number : </label>
                <div className='col-sm-5'>
                <input type="text" required className='form-control' name="contactno" value={hospital.contactno} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'contactno', val: e.target.value })} }  />
                <h6 className="text-danger text-center">{contact}</h6>
                </div>
                </div>
               
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Email : </label>
                <div className='col-sm-5'>
                <input type="text" required className='form-control' name="email" value={hospital.email} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'email', val: e.target.value })} } placeholder="Abcd123@gmail.com" />
                 <h6 className="text-danger text-center">{hemail}</h6>
                </div>
                </div>
               
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Address : </label>
                <div className='col-sm-5'>
                <input type="text" required className='form-control' name="address" value={hospital.address} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'address', val: e.target.value })} } placeholder="Address" />
                </div>
                </div>
              
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Enter Password : </label>
                <div className='col-sm-5'>
                <input type="password" required className='form-control' name="pwd" value={hospital.pwd} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'pwd', val: e.target.value })} }  placeholder="Abcde123" />
                <h6 className="text-danger text-center">{password}</h6>
                </div>
                </div>
               

                <button type="submit" className="btn btn-1"
                onClick={ (e)=> {sendData(e)} }>Submit</button>
                <span style={{margin:'10px'}}></span>
                <button type="reset" className="btn btn-1"
                onClick={ ()=>{dispatch({type: 'clear'})} }>Clear</button>
                <br/>
                <br/>
                <a href='/login/*'>Already a User?Login here...</a>
            </form>
            
            {/*<p> Empid : {eid} </p> */}
            {/* {JSON.stringify(doctor)} <br/> */}
          
            <Routes>
            <Route path="/login/*" element={<Login />} />
            </Routes>
        </div>
    )
}

export default RegHospital;

