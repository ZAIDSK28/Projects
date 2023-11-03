import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Appointment from './Appointment';
import { login } from '../LoggedSlice';
import Logout from '../logout';
import PatientUi from './PatientUi';
import UpdatePatient from './UpdatePatient';
import ViewAppointment from './ViewAppointment';
import ViewDoctor from './ViewDoctor';
import ViewFeedback from './ViewFeedback';

const Homepage = new URL("../images/one.jpg",import.meta.url)
let PatientHome = () => {
    const [nm,setNm] = useState(""); 
    const [flag, setFlag]= useState(false);
    const [path,  setPath] = useState("http://localhost:3000/patientHome");
    const dispatch = useDispatch();
    let pid = (JSON.parse(localStorage.getItem("loggedinp"))).pid;
    const mystate = useSelector((state)=>state.logged) 
    let navigate=useNavigate();

   useEffect( () => {
        let loginid = (JSON.parse(localStorage.getItem("loggedinuser"))).loginid;
        
        fetch("http://localhost:8080/patient/getpatient?loginid="+loginid)
        .then(res => res.json())
        .then(patient => {console.log(JSON.stringify(patient));
                          dispatch(login());
                          localStorage.setItem("loggedinp",JSON.stringify(patient));
                           setNm((JSON.parse(localStorage.getItem("loggedinp"))).fname);
                           setFlag(true)
                         })
        },[]);
      

        const [show,setShow]=useState(false);
    return(
        <>
        <section className="navbar-bg"></section>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <div className={'collapse navbar-collapse ${show ? show : ""}'} id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
                <div>
                <a className="nav-link"  href="/patientHome/ui" >Home</a>
                
                </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/patientHome/viewapp">Appointment Status</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/patientHome/viewdoc">View Doctor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={'/patientHome/updatepat/'+pid}>Update Profile</a>
        </li>
      </ul>
      </div>
      <form className="d-flex">
      <h4 style={{color:'white'}}> Welcome {nm} </h4>
      <span style={{margin:'20px'}}></span>
        {/* <button className="btn btn-outline-success" type="submit" onClick={() => {
            navigate("/logout");
          }}>Logout</button> */}
           <div style={{display: mystate.loggedIn?"block":"none"}}>
                <Logout />
            </div>

      </form>
  </div>
  </nav>
  
  <div style={{display: flag?"block":"none"}}>
  {/* <img src={Homepage} style={{width:1000}} /> */}
  </div>
        <div>
            {/* <h2>This is Patient Home</h2> */}
            {/* <h1> Welcome {nm} </h1> */}
        </div>
        <Routes>
        <Route path="/updatepat/:pid" element={<UpdatePatient />} />
        <Route path="/appointment/:docid" element={<Appointment />} />
        <Route path="/viewdoc/*" element={<ViewDoctor />} />
        <Route path="/viewapp/*" element={<ViewAppointment />} />
        <Route path="/viewfeedback/:docid/*" element={<ViewFeedback />} />
        <Route path="/ui" element={<PatientUi />} />
        </Routes>
        </>
    )
}

export default PatientHome;