import {useReducer, useState} from 'react';
import HospitalHome from './HospitalHome';
import {Link, Routes, Route, useNavigate, useParams} from 'react-router-dom';
import ManageApp from '../Doctor/ManageApp';
import '../Doctor/Doctor.css'

const init = {
    Name: "",
    Experience:0,
    Speciality: "",
    Email:"",
    Fees:0,
    Contactno:"",
    DOB:"",
    Gender:"",
    Department:"",
    Password:"",
    //Hospid:""
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


let AddDoctor = () => {

    const [doctor, dispatch] = useReducer(reducer, init);
    let navigate = useNavigate();
    let hospid = (JSON.parse(localStorage.getItem("loggedind"))).hospid;
    //console.log(hospid);
    const sendData = (e) => {
        e.preventDefault();
        //console.log("hi");
        
        alert("Doctor added Successfull");
        
        const reqData = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({
                docname: doctor.Name,
                experience: doctor.Experience,
                speciality: doctor.Speciality,
                email: doctor.Email,
                fees: doctor.Fees,
                contactno:doctor.Contactno,
                dob:doctor.DOB,
                gender: doctor.Gender,
                department:doctor.Department,
                pwd: doctor.Password,
                hospid:hospid
            })

        }
        fetch("http://localhost:8080/doctors/registerdoctor",reqData)
        .then((res)=>{
            res.text() 
            navigate('/hospitalHome');
        })
        
        
    }

    return (
        <div className="main-div" >
            
           
            <form className="column sub-div">
            <h4 className='text-center brand-color'> ADD NEW DOCTOR </h4><br/>
           
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Enter Name : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="Name" value={doctor.Name}
                onChange={ (e)=>{dispatch({type: 'update', field: 'Name', val: e.target.value })} } placeholder="eg:- Wajid Shaikh" />
                </div>
                </div>
               
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Experience : </label>
                <div className='col-sm-5'>
                <input type="number" className='form-control' name="Experience" value={doctor.Experience} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'Experience', val: e.target.value })} } />
                </div>
                </div>
               
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Speciality : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="Speciality" value={doctor.Speciality} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'Speciality', val: e.target.value })} } placeholder="eg:- mbbs,bhms,md"/>
                </div>
                </div>
               
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Email : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="Email" value={doctor.Email} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'Email', val: e.target.value })} } placeholder="wajid123@gmail.com" />
                </div>
                </div>
               
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Charges : </label>
                <div className='col-sm-5'>
                <input type="number" className='form-control' name="Fees" value={doctor.Fees} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'Fees', val: e.target.value })} } />
                </div>
                </div>
               
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Contactno : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="Contactno" value={doctor.Contactno} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'Contactno', val: e.target.value })} } />
                </div>
                </div>
              
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> DOB : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="DOB" value={doctor.DOB} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'DOB', val: e.target.value })} } placeholder="01/01/2001" />
                </div>
                </div>
                
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Gender : </label>
                <div className='col-sm-5'>
                <label htmlFor="male">Male<span style={{margin:'10px'}}></span></label>
                <input className="radio" type="radio"  name="Gender" value="male" id="male"
                onChange={(e)=>{dispatch({type:'update' , field:'Gender',val:e.target.value})}}  /><span style={{margin:'10px'}}></span>
               <label htmlFor="female">female<span style={{margin:'10px'}}></span></label>
                <input className="radio" type="radio"  name="Gender" value="female" id="female"
                onChange={(e)=>{dispatch({type:'update' , field:'Gender',val:e.target.value})}} />
                </div>
                </div>
                
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Department : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="Department" value={doctor.Department} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'Department', val: e.target.value })} } placeholder="eg:- Psychatrist,Gynac etc"/>
                </div>
                </div>
               
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Password : </label>
                <div className='col-sm-5'>
                <input type="password" className='form-control' name="Password" value={doctor.Password} 
                onChange={ (e)=>{dispatch({type: 'update', field: 'Password', val: e.target.value })} } />
                </div>
                </div>
                
                <button type="submit" className="btn btn-1" 
                onClick={ (e)=> {sendData(e)} }> ADD </button>
                <button type="reset" className="btn btn-1"
                onClick={ ()=>{dispatch({type: 'clear'})} }>CLEAR</button>
            </form>
           
            {/*<p> Empid : {eid} </p> */}
            {/* {JSON.stringify(doctor)} <br/> */}
            <Routes>
            <Route path="/hospitalHome" element={<HospitalHome />} />
            <Route path="/manageapp/*" element={<ManageApp /> }/>
        </Routes>
        </div>
    )

}

export default AddDoctor; 


//1. developing the form to collect the data
//2. develop rest api for post - individual testing - postman
//3. calling rest API after click of submit in component