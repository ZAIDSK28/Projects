
import axios from "axios";
import React, { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Routes,Route, Link, useNavigate, useParams } from "react-router-dom";
import Appointment from "../Patient/Appointment";
import UpdateDoc from "../Doctor/UpdateDoc";



const ViewAllFeedback= () =>{

    const [feedback, setFeedback]=useState([]);
    
    let navigate=useNavigate();
    const {docid} = useParams();
    let pid = (JSON.parse(localStorage.getItem("loggedinp"))).pid;

    useEffect(()=>{
        getFeedback();
    },[]);
    const getFeedback = () =>
    {
        axios("http://localhost:8080/admin/showallfeedbacks")
        .then(result =>{
            setFeedback(result.data);
            console.log(result.data)
            
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
   
return(
    <>
    <div>
        <h3 className="d-flex justify-content-center" ><u>Feedbacks</u></h3>
        <br/>
        <form>
        <table className="table table-borderd">
        <thead className="thead-dark">
            <tr >
                <th>Sr no.</th>
                <th>Doctor Name</th>
                <th >Patient Name</th>
                <th >Feedback</th>
            </tr>
            {
                feedback.map((item,i) =>(
                    <tr key={i}>
                    <td> {i+1}</td>
                    <td > {item.docid.docname}</td>
                    <td > {item.pid.fname+" "+item.pid.lname}</td>
                    <td > {item.description}</td>
                    
                    </tr>
                ))
            }
            
            </thead>
            </table>
            </form>
            
        <Routes>
        <Route path="/appointment/:docid" element={<Appointment />} />
        </Routes>
    </div>
    
    </>
)
}
export default ViewAllFeedback;