import axios from "axios";
import React,{useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";


const UpdateDoc = () => {
    const [docedit,setDocedit]=useState({docname:'',experience:'',speciality:'',fees:'',contactno:''});
    const [msg,setMsg]=useState('');
    const navigate=useNavigate();
    const {docid} = useParams();
    //console.log(docid);
    useEffect(()=>{
    getDoc();
    },[]);
    const getDoc = () =>
    {
        axios(`http://localhost:8080/doctors/getdoctorbyid/${docid}`)
        .then(result =>{
            // console.log(res)
            setDocedit(result.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }
 
    const handleEdit = (e)=>{
        setDocedit({...docedit,[e.target.name]:e.target.value});

    }

    const handleDocUpdate= async (e)=>{
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
            body: JSON.stringify(docedit)
        }
        fetch(`http://localhost:8080/doctors/updatedoctors/${docid}`,reqData)
        .then((result)=>{
            // result.json().then((resp)=>{
            //     console.warn(resp);
            //     navigate('/hospitalHome/getdoc');
            //    // getDoc();
            // })
                alert("Updated Successfully")
                navigate('/doctorHome');
        } )
        
    }

    return(
            <>
            {/* <h1>Update</h1> */}
            <div className="vh-100" style={{ backgroundColor: '#F4FDFB', position: 'centre' }}>
            <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10 col-md-8 col-lg-10 col-xl-6">
            <div className="card shadow-2-strong">
            <div className="card-body p-5 text-center">
            <h2 className='text-center brand-color'> Update Details </h2><br/>
            <form onSubmit={handleDocUpdate} >
            <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Name : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="docname"
                value={docedit.docname}  onChange={(e)=>handleEdit(e)} />
                </div>
                </div>
                </div>
                <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Experience : </label>
                <div className='col-sm-5'>
                <input type="number" className='form-control' name="experience"
                value={docedit.experience} onChange={(e)=>handleEdit(e)}  />
                </div>
                </div>
                </div>
                <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Speciality : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="speciality" 
                value={docedit.speciality}  onChange={(e)=>handleEdit(e)} />
                </div>
                </div>
                </div>
                <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Charges : </label>
                <div className='col-sm-5'>
                <input type="number" className='form-control' name="fees"
                value={docedit.fees}  onChange={(e)=>handleEdit(e)} />
                </div>
                </div>
                </div>
                <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Contactno : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="contactno"
                value={docedit.contactno} onChange={(e)=>handleEdit(e)}  />
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

export default UpdateDoc;