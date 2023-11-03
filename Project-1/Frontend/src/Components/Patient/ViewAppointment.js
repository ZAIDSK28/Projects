
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Routes,Route, Link, useNavigate, useParams } from "react-router-dom";
import PatientHome from "./PatientHome";
import UpdateDoc from "../Doctor/UpdateDoc";

const ViewAppointment= () =>{

    const [app, setApp]=useState([]);
    let navigate=useNavigate();
   
    let pid = (JSON.parse(localStorage.getItem("loggedinp"))).pid;
    useEffect(()=>{
        getApp();
    },[]);
    const getApp = () =>
    {
        axios("http://localhost:8080/patient/myappointments?pid="+pid)
        .then(result =>{
            setApp(result.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    const cancelApp=(appointmentid)=>{
       
        if( window.confirm("Confirm Delete?"))
        {
                fetch("http://localhost:8080/patient/cancelappointment?appid="+appointmentid,
                { method:'DELETE'
            }).then((result)=>{
                    alert("Deleted Successfully")
                    navigate('/patientHome');
                })
            }
            }
return(
    <>
    <div>
        <h3 className="d-flex justify-content-center" ><u>My Appointments</u></h3>
        <br/>
        <table className="table table-bordered">
        <thead className="thead-dark">
            <tr>
                <th>Sr no.</th>
                <th>Doctor Name</th>
                <th>Department</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th></th>
            </tr>
            {
                app.map((item,i) =>(
                    <tr key={i}>
                    <td> {i+1}</td>
                    <td> {item.docid.docname}</td>
                    <td> {item.docid.department}</td>
                    <td> {item.date}</td>
                    <td >{item.starttime}</td>
                    <td className="text-success">{item.status}</td>
                    <td><button className="btn btn-danger" onClick={()=>cancelApp(item.appointmentid)}> Cancel </button>
                    </td>
                    </tr>
                ))
            }
            </thead>
            </table>
        <Routes>
        <Route path="/hospitalHome/updatedoc/:docid" element={<UpdateDoc />} />
        <Route path="/patientHome" element={<PatientHome />} />
        </Routes>
    </div>
    
    </>
)
}
export default ViewAppointment;