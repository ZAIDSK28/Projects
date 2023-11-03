import React , {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, Routes, Route} from 'react-router-dom';
import AddDoctor from "./Hospital/AddDoctor";
import HospitalHome from "./Hospital/HospitalHome";
import Login from "./Login";
import PatientHome from "./Patient/PatientHome";
import RegHospital from "./Hospital/RegHospital";
import Register from "./Register";
import RegPatient from "./Patient/RegPatient";
import store from "./store";
import LoggedSlice, {login} from './LoggedSlice'
import AdminHome from "./Admin/AdminHome";
import Appointment from "./Patient/Appointment";
import DoctorHome from "./Doctor/DoctorHome";
import ManageApp from "./Doctor/ManageApp";
import NavbarHome from "./NavbarHome";


const Homepage = new URL("./images/Homepage.png",import.meta.url)
let Navbar = () =>{

const [show,setShow]=useState(false);
const [flag, setFlag]=useState(false);
const dispatch = useDispatch;   //updating the store


const mystate = useSelector((state)=>state.logged) 

const submitme = (e) => {
  e.preventDefault();
  
  dispatch(login())
  console.log("state modified")
}
    return(
        <>
        <div style={{display: mystate.loggedIn?"none":"block"}}>
        <section className="navbar-bg"></section>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">HEALTH BLAZE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() =>setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={'collapse navbar-collapse ${show ? show : ""}'} id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sign Up
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/regpt">Patient Registraion</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/reghosp">Hospital Registraion</a></li>
            
            
            
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        
        <button onClick={(e)=> {submitme(e)}} className="btn btn-outline-success" type="submit"><Link to="/login"> Login </Link></button>
      </form>
      
    </div>
    
  </div>
  
</nav>

<div className="container">
  
</div>
</div>

        <Routes>
          <Route path="/login/*" element={<Login />} />
          <Route path="/register/*" element={<Register />} />
          <Route path="/patientHome/*" element={<PatientHome />} />
          <Route path="/hospitalHome/*" element={<HospitalHome />} />
          <Route path="/doctorHome/*" element={<DoctorHome />} />
          <Route path="/adminHome/*" element={<AdminHome />} />
          <Route path="/regpt/*" element={<RegPatient />} />
          <Route path="/reghosp/*" element={<RegHospital />} />
          <Route path="/adddoc" element={<AddDoctor />} />
          <Route path="/manageapp/*" element={<ManageApp />} /> 
          <Route path="/" element={<NavbarHome />}/>
          </Routes>
          
        </>
        
    )
}

export default Navbar;