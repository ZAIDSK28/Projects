
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Routes,Route, Link, useNavigate, useParams } from "react-router-dom";
import UpdateDoc from "../Doctor/UpdateDoc";

const GetHospital= () =>{

    const [hosp, setHosp]=useState([]);
    const [Post, setPost]=useState([]);
    let navigate=useNavigate();
    let hospid = (JSON.parse(localStorage.getItem("loggedind"))).hospid;

    useEffect(()=>{
        getHosp();
    },[]);
    const getHosp = () =>
    {
        axios("http://localhost:8080/admin/showhospitals")
        .then(result =>{
            //console.log("hopsital id "+hospid);
            setHosp(result.data);
            
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    const deleteHosp=(hospid)=>{
        const enteredName = prompt("Enter 'yes' to Confirm delete")
        if(enteredName=='yes')
        {
                fetch(`http://localhost:8080/admin/deletehospital/${hospid}`,
                { method:'DELETE'
            }).then((result)=>{
                    alert("Deleted Successfully")
                    navigate('/adminHome');
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
        <table className="table table-bordered">
        <thead className="thead-dark">
            <tr>
                <th>Sr no.</th>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Email</th>
                <th></th>
            </tr>
            {
                hosp.map((item,i) =>(
                    <tr key={i}>
                    <td> {i+1}</td>
                    <td> {item.hospname}</td>
                    <td> {item.address}</td>
                    <td >{item.contactno}</td>
                    <td >{item.email}</td>
                    <td><button className="btn btn-danger" onClick={()=>deleteHosp(item.hospid)}> Delete </button></td>
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
export default GetHospital;