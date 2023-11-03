
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Routes,Route, Link, useNavigate, useParams } from "react-router-dom";
import ViewFeedback from "./ViewFeedback";


const Appointment= () =>{

    const [doc, setDoc]=useState([]);
    const [slot, setSlot]=useState([]);
    const [adate, setAdate] = useState("");
    const [msg, setMsg] = useState("");
    const [flag,setFlag] = useState(false);
    const [status,setStatus]=useState("confirmed");
    const [time, setTime]=useState('');
    let navigate=useNavigate();
    const {docid} = useParams();
   let pid = (JSON.parse(localStorage.getItem("loggedinp"))).pid;
    useEffect(()=>{
        getDoc();
    },[]);
    const getDoc = () =>
    {
        axios(`http://localhost:8080/doctors/getdoctorbyid/${docid}`)
        .then(result =>{
            setDoc(result.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const checkApp = (e) => {
        e.preventDefault();
        console.log(adate);
        var wday = new Date(adate).getDay();
        fetch("http://localhost:8080/doctors/checkAv?did="+docid+"&wday="+wday)
        .then(resp => resp.json())
        .then(data => {console.log(JSON.stringify(data));
            
             if(data)
             {
                setFlag(true)
                setMsg("")
                //setMsg("please select available time slot");
                fetch("http://localhost:8080/doctors/getAv?did="+docid+"&dt="+adate)
                .then(resp => resp.json())
                .then(data => {console.log(JSON.stringify(data))
                    setSlot(data);
                });
                
             } 
              else 
             {
                setFlag(false);
                setMsg(<p className="text-danger">"not available. plz, select another date"</p>)
             }
    })
}

    const bookApp = (e)=>{
        e.preventDefault();
        
        const reqData = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({
               
                status: status
            })

        }
        fetch("http://localhost:8080/doctors/bookappointment?pid="+pid+"&did="+docid+"&dt="+adate+"&time="+time,reqData)
        .then(res=>{
            
            alert("Appointment done Successfully")
                navigate('/patientHome/ui');
        })
    }

return(
    <>
    <div>
    <div className="card">
    <div className="card-body">
    <h1 className="d-flex justify-content-center"><u>Doctor profile</u></h1>
        <div className="container">
        <div className="row" >
            <div className="col" style={{margin:'70px'}}>
       
        <h5 className="">Name :<span style={{margin:'10px'}}></span>{doc.docname}</h5>
        <h5>Gender :<span style={{margin:'10px'}}></span>{doc.gender}</h5>
        <h5>Specialization :<span style={{margin:'10px'}}></span>{doc.speciality}</h5>
        <h5>Experience :<span style={{margin:'10px'}}></span>{doc.experience} yr's</h5>
        <h5>Charges :<span style={{margin:'10px'}}></span>{doc.fees}</h5>
        <br/>
        <br/>
       
        <h4><u>Contact Details :</u></h4>
        <h5>Mobile No. :<span style={{margin:'10px'}}></span>{doc.contactno}</h5>
        <h5>Email :<span style={{margin:'10px'}}></span>{doc.email}</h5><br/>
        </div>

        
        <div  className="col" style={{margin:'70px'}}>
        <div className="position-absolute">
        <label>Select Date :</label><span style={{margin:'10px'}}></span>
        <input type="date" name="adate" onChange={(e)=>setAdate(e.target.value)} />

        <span style={{margin:'10px'}}></span>

        <button className="btn btn-danger" onClick={(e)=>{checkApp(e)}} > Get Slots </button>
        <br/>
        <div>{msg}</div>
        <br/>
        <div  style={{display: flag?"block":"none"}}>
            <form>
                <div >
            <select  onChange={(e)=>{
            setTime(e.target.value);
        }}>
           

                 <option value='' >Select Slots</option>
            { 
                slot.map((element, index) => <option key={index}>{element}</option>) 
            }
            </select>
            <span style={{margin:'10px'}}></span>
            <button onClick={(e)=>{bookApp(e)}} className="btn btn-danger">Book Appointment</button>
            </div>
           
        </form>
        </div>
        
        <a className="btn btn-danger" style={{margin:'50px'}} href={`/patientHome/viewfeedback/${docid}`}>View Feedbacks</a>
        <br/>
        </div>
        </div>
        </div>    
        </div>

        {/* <Routes>
        <Route path="/viewfeedback" element={<ViewFeedback />} />
        </Routes> */}
    </div>

    <br/>
    <br/>
    </div>
    </div>
    
    </>
)
}
export default Appointment;