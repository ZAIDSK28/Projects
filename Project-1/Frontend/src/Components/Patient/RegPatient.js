import axios from 'axios';
import {useReducer, useState} from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Login from '../Login';
import './Patient.css'
const init = {
    fname: "",
    lname: "",
    dob:"",
    gender:"",
    bloodgroup:"",
    email:"",
    contactno:"",
    pwd:""
}

//second requirement for useReducer - updation function
const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val};
        case 'clear' :
            return init;   
    }
}

let RegPatient =  () => {
    const [patient, dispatch] = useReducer(reducer, init);
   let navigate = useNavigate();

    const [password, errorPassword] = useState("");
    const [pfname, errorFName] = useState("");
    const [plname, errorLName] = useState("");
    const [contact, errorContact] = useState();
    const [pemail, setEmail] = useState("");


    const sendData = (e) => {
        var count = 0;

        if (!patient.pwd.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) errorPassword("Password is not strong");
        else {
          errorPassword("");
          count++;
        }
    
        if (!patient.fname.match( /^[A-Z]{1}[A-Za-z]{1,}$/)) errorFName("Enter valid First Name");
        else {
          errorFName("");
          count++;
        }

        if (!patient.lname.match( /^[A-Z]{1}[A-Za-z]{1,}$/)) errorLName("Enter valid Last Name");
        else {
          errorLName("");
          count++;
        }
    
        if (!patient.contactno.match(/[0-9]{10}/)) errorContact("Enter valid Contact");
        else {
          errorContact("");
          count++;
        }
    
        if (!patient.email.match(/^[a-z][a-z0-9]{1,}@[a-z]{1,}\.[a-z]{1,}$/)) setEmail("Enter valid Email");
        else {
          setEmail("");
          count++;
        }
        if (count === 5) {
        e.preventDefault();
        axios
        .post("http://localhost:8080/patient/registerpatient", patient)
        .then((response) => {
          if (response.status === 200) {
            alert("Patient Successfully Registered");
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
            {/* <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10 col-md-8 col-lg-10 col-xl-6">
            <div className="card shadow-2-strong">
            <div className="card-body p-5 text-center"> */}
            <form className="column sub-div">
            <h4 className="text-center brand-color"> <u>PATIENT REGISTRATION FORM</u> </h4><br></br>
            {/* <div className="form-outline mb-4"> */}
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> First Name : </label>
                <div className='col-sm-5'>
                <input type="text" required className='form-control' name="fname" value={patient.fname}
                onChange={ (e)=>{dispatch({type: 'update', field: 'fname', val: e.target.value })} } placeholder="First Name" />
                 <h6 className="text-danger text-center">{pfname}</h6>
                </div>
                </div>
                 {/* </div> 
                <div className="form-outline mb-4"> */}
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Last Name : </label>
                <div className='col-sm-5'>
                <input type="text" required className='form-control' name="lname" value={patient.lname}
                onChange={ (e)=>{dispatch({type: 'update', field: 'lname', val: e.target.value })} } placeholder="Last Name" />
                <h6 className="text-danger text-center">{plname}</h6>
                </div>
                </div>
                {/* </div>
                <div className="form-outline mb-4"> */}
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Gender : </label>
                <div className='col-sm-5'>
                <label htmlFor="male">Male<span style={{margin:'10px'}}></span></label>
                <input className="radio" type="radio"  name="gender" value="male" id="male"
                onChange={(e)=>{dispatch({type:'update' , field:'gender',val:e.target.value})}}  /><span style={{margin:'10px'}}></span>
               <label htmlFor="female">female<span style={{margin:'10px'}}></span></label>
                <input className="radio" type="radio"  name="gender" value="female" id="female"
                onChange={(e)=>{dispatch({type:'update' , field:'gender',val:e.target.value})}} />
                </div>
                </div>
                {/* </div>
                <div className="form-outline mb-4"> */}
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Blood Group : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="bloodgroup" value={patient.bloodgroup} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'bloodgroup', val: e.target.value })} } />
                </div>
                </div>
                {/* </div>
                <div className="form-outline mb-4"> */}
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Email : </label>
                <div className='col-sm-5'>
                <input type="email" required className='form-control' name="email" value={patient.email} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'email', val: e.target.value })} } placeholder="Abcd123@gmail.com" />
                <h6 className="text-danger text-center">{pemail}</h6>
                </div>
                </div>
                {/* </div>
                <div className="form-outline mb-4"> */}
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Mobile Number : </label>
                <div className='col-sm-5'>
                <input type="text" required className='form-control' name="contactno" value={patient.contactno} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'contactno', val: e.target.value })} } />
                <h6 className="text-danger text-center">{contact}</h6>
                </div>
                </div>
                {/* </div>
                <div className="form-outline mb-4"> */}
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> DOB : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="dob" value={patient.dob} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'dob', val: e.target.value })} } placeholder="dd/mm/yyy" />
                </div>
                </div>
                {/* </div>
                <div className="form-outline mb-4"> */}
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Enter Password : </label>
                <div className='col-sm-5'>
                <input type="password" required className='form-control' name="pwd" value={patient.pwd} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'pwd', val: e.target.value })} } placeholder="Abcde123" />
                <h6 className="text-danger text-center">{password}</h6>
                </div>
                </div>
                {/* </div> */}
                <button type="submit" className="btn btn-1"
                onClick={ (e)=> {sendData(e)} }>Sign Up</button>
                <span style={{margin:'10px'}}></span>
                <button type="reset" className="btn btn-1"
                onClick={ ()=>{dispatch({type: 'clear'})} }>Clear</button>
                <br/>
                <br/>
                <a href='/login/*'>Already a User?Login here...</a>
            </form>
            {/* </div>
            </div>
            </div>
            </div>
            </div> */}
            {/*<p> Empid : {eid} </p> */}
            {/* {JSON.stringify(doctor)} <br/> */}
            
            <Routes>
            <Route path="/login/*" element={<Login />} />
            </Routes>
        </div>
    )
}

export default RegPatient;