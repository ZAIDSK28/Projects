
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Routes,Route, Link, useNavigate, useParams } from "react-router-dom";
import UpdateDoc from "./UpdateDoc";

const ViewDocApp= () =>{

    const [app, setApp]=useState([]);
    let navigate=useNavigate();
    let docid = (JSON.parse(localStorage.getItem("loggedindoc"))).docid;

    useEffect(()=>{
        getApp();
    },[]);
    const getApp = () =>
    {
        axios("http://localhost:8080/doctors/viewappointments?docid="+docid)
        .then(result =>{
            setApp(result.data);
            console.log(result.data)
            
            //console.log(appointmentid)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    const cancelApp=(appointmentid)=>{
        const enteredName = prompt("Enter 'yes' to Confirm delete")
        if(enteredName==='yes')
        {
                fetch("http://localhost:8080/patient/cancelappointment?appid="+appointmentid,
                { method:'DELETE'
            }).then((result)=>{
                    alert("Deleted Successfully")
                    navigate('/patientHome');
                })
            }
            else
            {
                alert("Cannot delete");
            }
            }
return(
    <>
    <div>
        <h3 className="d-flex justify-content-center" ><u>Appointments</u></h3>
        <br/>
        <table className="table table-bordered">
        <thead className="thead-dark">
            <tr>
                <th>Sr no.</th>
                {/* <th>Appointment id</th> */}
                <th>Patient Name</th>
                <th>Gender</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th></th>
            </tr>
            {
                app.map((item,i) =>(
                    <tr key={i}>
                    <td> {i+1}</td>
                    {/* <td> {item.appointmentid}</td> */}
                    <td> {item.pid.fname}</td>
                    <td> {item.pid.gender}</td>
                    <td> {item.date}</td>
                    <td >{item.starttime}</td>
                    <td className="text-success">{item.status}</td>
                   
                    </tr>
                ))
            }
            </thead>
            </table>
        <Routes>
        <Route path="/hospitalHome/updatedoc/:docid" element={<UpdateDoc />} />
        </Routes>
    </div>
    
    </>
)
}
export default ViewDocApp;