import RegHospital from "./Hospital/RegHospital"
import RegPatient from "./Patient/RegPatient"
import {Link, Routes, Route} from 'react-router-dom';
import Login from "./Login";

let Register = () => {

    return(
        <div className="App">
            <ul className="nav navbar">
            <li className="nav-item">
              <div className="nav-link">
                <Link to="/regpt"> PATIENT REGISTERATION</Link> 
              </div>
            </li>
            <li className="nav-item">
            <div className="nav-link">
                <Link to="/reghosp"> HOSPITAL REGISTRATION </Link> 
            </div>   
            </li> 
            </ul>
            <a href="/register/reghosp" class="btn btn-primary btn-lg active btn-lg" role="button" aria-pressed="true">HOSPITAL REGISTRATION</a>

          <Routes>
            <Route path="/regpt" element={<RegPatient />} />
            <Route path="/reghosp" element={<RegHospital />} />
            <Route path="/login/*" element={<Login />} />
            {/* <Route path="/getpt" element={<GetAllPatient />} /> */}
          </Routes>
        </div>
    )
}

export default Register;