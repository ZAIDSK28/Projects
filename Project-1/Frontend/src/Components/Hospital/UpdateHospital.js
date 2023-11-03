import axios from "axios";
import React,{useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";


const UpdateHospital = () => {
    const [hospedit,setHospedit]=useState({hospname:'',address:'',contactno:''});
    
    const navigate=useNavigate();
    let hospid = (JSON.parse(localStorage.getItem("loggedind"))).hospid;
    //const {pid} = useParams();
    //console.log(docid);
    useEffect(()=>{
    gethosp();
    },[]);
    const gethosp = () =>
    {
        axios(`http://localhost:8080/hospital/gethospitalbyid/${hospid}`)
        .then(result =>{
            // console.log(res)
            setHospedit(result.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }
 
    const handleEdit = (e)=>{
        setHospedit({...hospedit,[e.target.name]:e.target.value});

    }

    const handleHospUpdate= async (e)=>{
        e.preventDefault();
        const reqData = {
            method: "PUT",
            headers: {
                "Accept":"application/json",
                "content-type":"application/json"
            },
            body: JSON.stringify(hospedit)
        }
        fetch(`http://localhost:8080/hospital/updatehospitals/${hospid}`,reqData)
        .then((result)=>{
            // result.json().then((resp)=>{
            //     console.warn(resp);
            //     navigate('/hospitalHome/getdoc');
            //    // getDoc();
            // })
                alert("Updated Successfully")
                navigate('/hospitalHome');
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
            <form onSubmit={handleHospUpdate} >
            <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Name : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="hospname"
                value={hospedit.hospname}  onChange={(e)=>handleEdit(e)} />
                </div>
                </div>
                </div>
                <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> address : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="address"
                value={hospedit.address}  onChange={(e)=>handleEdit(e)} />
                </div>
                </div>
                </div>
                <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Contactno : </label>
                <div className='col-sm-5'>
                <input type="text" className='form-control' name="contactno"
                value={hospedit.contactno} onChange={(e)=>handleEdit(e)}  />
                </div>
                </div>
                </div>
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

export default UpdateHospital;