import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import AddDoctor from '../Hospital/AddDoctor';
import AdminUi from './AdminUi';
import GetDoctor from '../Hospital/GetDoctor';
import GetHospital from './GetHospital';
import { login } from '../LoggedSlice';
import Logout from '../logout';
import ViewAllFeedback from './ViewAllFeedback';

let AdminHome = () => {
    let navigate=useNavigate();
    const dispatch = useDispatch(); 
    const mystate = useSelector((state)=>state.logged)

    useEffect( () => {
      dispatch(login());
    },[])
    return(
        <>
        
        <section className="navbar-bg"></section>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <div className={'collapse navbar-collapse ${show ? show : ""}'} id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link" href="/adminHome/ui">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/adminHome/gethosp">View Hospitals</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">View Doctors</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/adminHome/viewallfeedback">View Feedback</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Update Profile</a>
        </li> */}
      </ul>
      </div>
      <form className="d-flex">
      <h4 style={{color:'white'}}> Welcome <span style={{margin:'5px'}}></span> Admin </h4>
      <span style={{margin:'20px'}}></span>
        {/* <button className="btn btn-outline-success" type="submit" onClick={() => {
            navigate("/");
          }}>Logout</button> */}
           <div style={{display: mystate.loggedIn?"block":"none"}}>
                <Logout />
            </div>
      </form>
  </div>
  </nav>
        
        <Routes>
            <Route path="/adddoc" element={<AddDoctor />} />
            <Route path="/getdoc" element={<GetDoctor />} />
            <Route path="/gethosp/*" element={<GetHospital />} />
            <Route path="/viewallfeedback/*" element={<ViewAllFeedback />} />
            <Route path="/ui" element={<AdminUi />} />
        </Routes>
        
        </>
    )
}

export default AdminHome;