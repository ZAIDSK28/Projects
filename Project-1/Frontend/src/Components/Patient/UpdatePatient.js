import axios from "axios";
import React,{useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";


const UpdatePatient = () => {
    const [ptedit,setPtedit]=useState({fname:'',lname:'',dob:'',bloodgroup:'',contactno:''});
    const [msg,setMsg]=useState('');
    const navigate=useNavigate();
    let pid = (JSON.parse(localStorage.getItem("loggedinp"))).pid;
    //const {pid} = useParams();
    //console.log(docid);
    useEffect(()=>{
    getPt();
    },[]);
    const getPt = () =>
    {
        axios(`http://localhost:8080/patient/getpatientbyid/${pid}`)
        .then(result =>{
            // console.log(res)
            setPtedit(result.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }
 
    const handleEdit = (e)=>{
        setPtedit({...ptedit,[e.target.name]:e.target.value});

    }

    const handlePtUpdate= async (e)=>{
        e.preventDefault();
        // const response=await axios.post(`http://localhost:8080/doctors/updatedoctors/${docid}`,docedit);
        // setMsg(response.data.msg);
        // navigate('/hospitalHome/getdoc');
        const reqData = {
            method: "PUT",
            headers: {
                "Accept":"application/json",
                "content-type":"application/json"
            },
            body: JSON.stringify(ptedit)
        }
        fetch(`http://localhost:8080/patient/updatepatient/${pid}`,reqData)
        .then((result)=>{
                alert("Updated Successfully")
                navigate('/patientHome');
        } )
        
    }

    return(
            <>
            
            <div className="vh-100" style={{ backgroundColor: '#F4FDFB', position: 'centre' }}>
            <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10 col-md-8 col-lg-10 col-xl-6">
            <div className="card shadow-2-strong">
            <div className="card-body p-5 text-center">
            <h2 className='text-center brand-color'> Details </h2><br/>
            <form onSubmit={handlePtUpdate} >
            <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> First Name : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="fname"
                value={ptedit.fname}  onChange={(e)=>handleEdit(e)} />
                </div>
                </div>
                </div>
                <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Last Name : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="lname"
                value={ptedit.lname}  onChange={(e)=>handleEdit(e)} />
                </div>
                </div>
                </div>
                <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> DOB : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="dob"
                value={ptedit.dob} onChange={(e)=>handleEdit(e)}  />
                </div>
                </div>
                </div>
                <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Blood Group : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="bloodgroup" 
                value={ptedit.bloodgroup}  onChange={(e)=>handleEdit(e)} />
                </div>
                </div>
                </div>
                
                <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Contactno : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="contactno"
                value={ptedit.contactno} onChange={(e)=>handleEdit(e)}  />
                </div>
                </div>
                </div>
                {/* <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> DOB : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="DOB" 
                value={docedit.dob}  />
                </div>
                </div>
                </div> */}
                <button type="submit" className="btn btn-primary" 
                > Submit </button>
                
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default UpdatePatient;