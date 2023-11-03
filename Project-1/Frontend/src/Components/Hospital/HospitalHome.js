import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import AddDoctor from './AddDoctor';
import Get from './GetDoctor';
import Upp from './GetDoctor';
import GetDoctor from './GetDoctor';
import HospitalUi from './HospitalUi';
import { login } from '../LoggedSlice';
import Logout from '../logout';
import ManageApp from '../Doctor/ManageApp';
import UpdateDoc from '../Doctor/UpdateDoc';
import UpdateHospital from './UpdateHospital';
import ViewFeedback from '../Patient/ViewFeedback';
import ViewHospApp from './ViewHospApp';
import ViewHospFeedback from './ViewHospFeedback';

let HospitalHome = () => {
    const [nm,setNm] = useState("");
    const dispatch = useDispatch(); 
    const navigate=useNavigate();
    let hospid = (JSON.parse(localStorage.getItem("loggedind"))).hospid;
    const mystate = useSelector((state)=>state.logged)
   useEffect( () => {
        let loginid = (JSON.parse(localStorage.getItem("loggedinuser"))).loginid;
        
        fetch("http://localhost:8080/hospital/gethospital?loginid="+loginid)
        .then(res => res.json())
        .then(hospital => {console.log(JSON.stringify(hospital));
                          dispatch(login());
                          localStorage.setItem("loggedind",JSON.stringify(hospital));
                           setNm((JSON.parse(localStorage.getItem("loggedind"))).hospname);
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
          <a className="nav-link" href="/hospitalHome/ui">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/hospitalHome/adddoc">Add Doctor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={'/hospitalHome/getdoc/'+hospid}>Get Doctor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/hospitalHome/viewhospapp">View Appointments</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={'/hospitalHome/updatehosp/'+hospid}>Update Profile</a>
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
                <Logout/>
            </div>
      </form>
  </div>
  </nav>
        <div>
            {/* <h2>This is Hospital Home</h2> */}
        </div>
        <Routes>
            <Route path="/adddoc/*" element={<AddDoctor />} />
            {/* <Route path="/getdoc" element={<GetDoctor />} /> */}
            {/* <Route path="/getdoc/*" element={<Upp />} /> */}
            <Route path="updatedoc/:docid" element={<UpdateDoc />} />
            <Route path="/updatehosp/:hospid" element={<UpdateHospital />} />
            <Route path="/getdoc/*" element={<Get />} />
            <Route path="/manageapp/*" element={<ManageApp />} />
            <Route path="/viewhospapp/*" element={<ViewHospApp />} />
            <Route path="/viewhospfeedback/:docid/*" element={<ViewHospFeedback />} />
            <Route path="/ui" element={<HospitalUi />} />
        </Routes>
        
        </>
    )
}

export default HospitalHome;