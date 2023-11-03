import { useEffect, useState } from "react";

let GetAllPatient = () => {

    const [patient, setPatient] = useState([]);
    //getting executed only once after first render
    useEffect( ()=> {
        fetch("http://localhost:8080/patient/getpatients")
        .then(resp => resp.json())
        .then(data => setPatient(data))
    },[]);
    return (
        <div>
            
            <h1 > Patient Details </h1>
            <table className="table table-bordered">
                <thead class="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>Gender</th>
                                <th>Blood Group</th>
                                <th>Email</th>
                                <th>Mobile no</th>
                                <th>DOB</th>
                                <th>Login ID</th> 
                            </tr>
                {
                    patient.map((pt)=>{
                        return(
                            <tr>
                                <td>{pt.pid}</td>
                                <td>{pt.fname+" "+pt.lname}</td>
                                <td>{pt.gender}</td>
                                <td>{pt.bloodgroup}</td>
                                <td>{pt.email}</td>
                                <td>{pt.contactno}</td>
                                <td>{pt.dob}</td>
                                <td>{pt.loginid}</td>
                            </tr>
                        )
                    })
                }
                </thead>
            </table>
        </div>
    )
}

export default GetAllPatient;