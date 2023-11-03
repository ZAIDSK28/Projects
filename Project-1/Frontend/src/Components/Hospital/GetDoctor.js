
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Routes,Route, Link, useNavigate, useParams } from "react-router-dom";
import HospitalHome from "./HospitalHome";
import UpdateDoc from "../Doctor/UpdateDoc";
import ViewFeedback from "../Patient/ViewFeedback";
import ViewHospFeedback from "./ViewHospFeedback";

const Get= () =>{

    const [doc, setDoc]=useState([]);
    let navigate=useNavigate();
   // const {hospid} = useParams();
    let hospid = (JSON.parse(localStorage.getItem("loggedind"))).hospid;

    useEffect(()=>{
        getDoc();
       // deleteDoc();
    },[]);
    const getDoc = () =>
    {
        axios(`http://localhost:8080/doctors/getdoctorbyhospid/${hospid}`)
        .then(result =>{
            //console.log("hopsital id "+hospid);
            setDoc(result.data);
            
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    const deleteDoc=(docid)=>{
       
        if( window.confirm("Confirm Delete?"))
        {
                fetch(`http://localhost:8080/doctors/deletedoctor/${docid}`,
                { method:'DELETE'
            }).then((result)=>{
                    alert("Deleted Successfully")
                    navigate('/hospitalHome');
                })
            }
            }
return(
    <>
    <div>
    <h3 className="d-flex justify-content-center" ><u>Doctors</u></h3>
        <table className="table table-bordered">
        <thead className="thead-dark">
            <tr>
                <th>Sr no.</th>
                <th>Name</th>
                <th>Department</th>
                <th>Experience</th>
                <th></th>
            </tr>
            {
                doc.map((item,i) =>(
                    <tr key={i}>
                    <td> {i+1}</td>
                    <td> {item.docname}</td>
                    <td> {item.department}</td>
                    <td >{item.experience}</td>
                    <td><Link to={`/hospitalHome/updatedoc/${item.docid}`} className="btn btn-success mx-2" >Edit</Link>
                    <button className="btn btn-danger" onClick={()=>deleteDoc(item.docid)}> Delete </button>
                    <Link to={`/hospitalHome/viewhospfeedback/${item.docid}`} className="btn btn-success mx-2" >View Feedbacks</Link> </td>
                    </tr>
                ))
            }
            </thead>
            </table>
        <Routes>
        <Route path="/updatedoc/:docid" element={<UpdateDoc />} />
        <Route path="/viewhospfeedback/:docid/*" element={<ViewHospFeedback />} />
        <Route path="/hospitalHome" element={<HospitalHome />} />
        </Routes>
    </div>
    
    </>
)
}
export default Get;