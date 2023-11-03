import logo from './logo.svg';
import './App.css';
import GetDoctor from './Components/Hospital/GetDoctor';
import {Link, Routes, Route, BrowserRouter} from 'react-router-dom';
import AddDoctor from './Components/Hospital/AddDoctor';
import RegPatient from './Components/Patient/RegPatient';
import GetAllPatient from './Components/Admin/GetAllPatient';
import RegHospital from './Components/Hospital/RegHospital';
import Register from './Components/Register';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import UpdateDoc from './Components/Doctor/UpdateDoc';
import UpdatePatient from './Components/Patient/UpdatePatient';
import UpdateHospital from './Components/Hospital/UpdateHospital';
import Appointment from './Components/Patient/Appointment';
import ManageApp from './Components/Doctor/ManageApp';
function App() {
  return (
<BrowserRouter>
      
      {/*<h1>WELCOME</h1>
        <MainMenu />
        <GetDoctor />*/}
        {/* <nav>

        </nav>
        
       
          <Route path="/" element={<Navbar />} /> */}
            {/* <Routes> */}
          {/* <Route path="manageapp" element={<ManageApp />} /> */}
          {/* <Route path="/hospitalHome/updatedoc/:docid" element={<UpdateDoc />} /> */}
          {/* <Route path="/patientHome/updatepat/:pid" element={<UpdatePatient />} /> */}
          {/* <Route path="/patientHome/appointment/:docid" element={<Appointment />} /> */}
          {/* <Route path="/hospitalHome/updatehosp/:hospid" element={<UpdateHospital />} /> */}
          {/* <Route path="/" element={} /> */}
        {/* </Routes>  */}
        {<Navbar />}
    </BrowserRouter>
  );
}

export default App;
