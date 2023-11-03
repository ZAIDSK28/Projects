import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import AddDoctor from '../Hospital/AddDoctor';
import DoctorUi from './DoctorUi';
import Get from '../Hospital/GetDoctor';
import Upp from '../Hospital/GetDoctor';
import GetDoctor from '../Hospital/GetDoctor';
import { login } from '../LoggedSlice';
import Logout from '../logout';
import ManageApp from './ManageApp';
import UpdateDoc from './UpdateDoc';
import UpdateHospital from '../Hospital/UpdateHospital';
import ViewDocApp from './ViewDocApp';

let DoctorHome = () => {
    
    const [nm,setNm] = useState(""); 
    const navigate=useNavigate();
    const dispatch = useDispatch(); 
    let docid = (JSON.parse(localStorage.getItem("loggedindoc"))).docid;
    const mystate = useSelector((state)=>state.logged)
   useEffect( () => {
        let loginid = (JSON.parse(localStorage.getItem("loggedinuser"))).loginid;
        
        fetch("http://localhost:8080/doctors/getdoctor?loginid="+loginid)
        .then(res => res.json())
        .then(doctor => {console.log(JSON.stringify(doctor));
                          dispatch(login());
                          localStorage.setItem("loggedindoc",JSON.stringify(doctor));
                           setNm((JSON.parse(localStorage.getItem("loggedindoc"))).docname);
                         })
        },[]);
      
        //let nm = (JSON.parse(localStorage.getItem("loggedinp"))).fname;
        const [show,setShow]=useState(false);
    return(
        <>
        <section className="navbar-bg"></section>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
     {/* <a class="navbar-brand" href="#">Appointment Manager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() =>setShow(!show)}> 
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div className={'collapse navbar-collapse ${show ? show : ""}'} id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/doctorHome/ui">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/doctorHome/manageapp">Set Schedule</a>
        </li>
        <li className="nav-item"> 
          <a className="nav-link" href="/doctorHome/viewdocapp">View Appointments</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={'/doctorHome/updatedoc/'+docid}>Update Profile</a>
        </li>
      </ul>
      </div>
      <form className="d-flex">
      <h4 style={{color:'white'}}> Welcome {nm} </h4>
      <span style={{margin:'20px'}}></span>
        {/* <button className="btn btn-outline-success" type="submit" onClick={() => {
            navigate("/");
          }}> Logout</button> */}
           <div style={{display: mystate.loggedIn?"block":"none"}}>
                <Logout />
            </div>
      </form>
  </div>
  </nav>
        {/* <div>
            <h2>This is Doctor Home</h2>
        </div> */}
        <Routes>
            <Route path="/adddoc/*" element={<AddDoctor />} />
            {/* <Route path="/getdoc" element={<GetDoctor />} /> */}
            {/* <Route path="/getdoc/*" element={<Upp />} /> */}
            <Route path="updatedoc/:docid" element={<UpdateDoc />} />
            <Route path="/updatehosp/:hospid" element={<UpdateHospital />} />
            <Route path="/getdoc/*" element={<Get />} />
            <Route path="/viewdocapp/*" element={<ViewDocApp />} />
            <Route path="/manageapp/*" element={<ManageApp />} />
            <Route path="/ui" element={<DoctorUi />} />
        </Routes>
        
        </>
    )
}

export default DoctorHome;