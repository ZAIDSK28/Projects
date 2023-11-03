
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Routes,Route, Link, useNavigate } from "react-router-dom";
import Appointment from "./Appointment";
import UpdateDoc from "../Doctor/UpdateDoc";

const ViewDoctor= () =>{

    const [doc, setDoc]=useState([]);
    const [dept, setDept]=useState([]);
    const [flag, setFlag]=useState(false);
    const [searchData,setSearchData]=useState('');
    let navigate=useNavigate();
    let hospname = (JSON.parse(localStorage.getItem("loggedind"))).hospname;
    let hospid = (JSON.parse(localStorage.getItem("loggedind"))).hospid;
    //console.log(hospname);
    useEffect(()=>{
        getDoc();
        getDept();
    },[]);
    const getDoc = () =>
    {
        axios('http://localhost:8080/doctors/getdoctors')
        .then(result =>{
            // console.log(res)
            setDoc(result.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const getDept = () =>{
        axios('http://localhost:8080/doctors/showdepartments')
        .then(result =>{
            console.log(result.data);
            setDept(result.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
return(
    <>
    <div className='container'>
        <div className='row'>
        <div className='col-sm-4'>
        <label className='form-label'>Search by Department name : </label>
    
            
        <select className='form-control'
        onChange={(e)=>{
            setSearchData(e.target.value)
            
                setFlag(true);
            
               if(e.target.value=="select")
               {
                setFlag(false);
               }

           
             
        }}>
            
            <option value='select' >Select...</option>
            
            {
                dept.map((item,i)=>(
            
                        <option key={i} >{item}</option>
                ))
            }
           
        </select>
        
            
        </div>
        </div>
    </div>
        <br/>
        <br/>
        
    <div style={{display: flag?"block":"none"}}>
        <table className="table table-bordered">
        <thead className="thead-dark">
            <tr>
                <th>Sr no.</th>
                <th>Hospital Name</th>
                <th>Doctor Name</th>
                <th>Speciality</th>
                <th>Department</th>
                <th>Charges</th>
                <th></th>
            </tr>
            {
                doc.filter((item)=>{
                    if(searchData === ""){
                        return item
                    }
                    else if(item.department.toLowerCase().includes(searchData.toLowerCase())){
                        return item
                    }
                    else if(item.speciality.toLowerCase().includes(searchData.toLowerCase())){
                        return item
                    }
                }).map((item,i) =>(
                    <tr key={i}>
                    <td> {i+1}</td>
                    <td>{item.hospid.hospname}</td>    
                    <td> {item.docname}</td>
                    <td> {item.speciality}</td>
                    <td> {item.department}</td>
                    <td >{item.fees}</td>
                    <td><Link to={`/patientHome/appointment/${item.docid}`} className="btn btn-success mx-2" >View Profile</Link> 
                    </td>
                    </tr>
                ))
            }
            </thead>
            </table>
        <Routes>
        <Route path="/patientHome/appointment/:docid" element={<Appointment />} />
        </Routes>
    </div>
    
    </>
)
}
export default ViewDoctor;