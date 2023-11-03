import { useReducer, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const init = {
    Starttime:'',
    Endtime:'',
    Sunday:0,
    Monday:0,
    Tuesday:0,
    Wednesday:0,
    Thursday:0,
    Friday:0,
    Saturday:0
}

const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val};
        case 'updatecheck' :
            return {...state, [action.field]: action.val === true? 1:0 }   
        case 'clear' :
            return init;   
    }
}

const ManageApp = () => {
    
    const [schedule, dispatch] = useReducer(reducer, init);
    let docid = (JSON.parse(localStorage.getItem("loggedindoc"))).docid;
    let navigate=useNavigate();
//     var convertedTime = moment("01:00 PM", 'hh:mm A').format('HH:mm')
// console.log(convertedTime);

    const sendData = (e) => {
        e.preventDefault();
        //console.log("hi");
        
        alert("Save Successfull");
        console.log(JSON.stringify(schedule))
        const reqData = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({
                
                starttime: schedule.Starttime,
                endtime: schedule.Endtime,
                sunday: schedule.Sunday,
                monday: schedule.Monday,
                tuesday: schedule.Tuesday,
                wednesday: schedule.Wednesday,
                thursday: schedule.Thursday,
                friday: schedule.Friday,
                saturday: schedule.Saturday
            })

        }
        fetch(`http://localhost:8080/appointment/setschedule/${docid}`,reqData)
        .then((res)=>{
            res.text() 
            navigate('/doctorHome');
        })
    }
    return(
        <>
        <div >  
        <h2 className="d-flex justify-content-center">Select Schedule</h2><br/>
        <div className="d-flex justify-content-center">
            <table>
                <tr>
                    <td> <label>Start Time:</label>
                         <input type="time" name="Starttime" value={schedule.Starttime} min="00:00" max="24:00"
                         onChange={ (e)=>{dispatch({type: 'update', field: 'Starttime', val: e.target.value });console.log(e.target.value)} }/>
                    </td>
                    <td>
                        <label>End Time:</label>
                        <input type="time" name="Endtime" value={schedule.Endtime} 
                         onChange={ (e)=>{dispatch({type: 'update', field: 'Endtime', val: e.target.value });console.log(e.target.value)} }/>
                    </td>
                </tr>
                <br/>
                <tr>
                <td><h3>Select Day's :-</h3></td>
                </tr>
                <tr>
                    <td></td>
                <td>
                    <input type="checkbox" name="Sunday" value={schedule.Sunday} 
                         onChange={ (e)=>{dispatch({type: 'updatecheck', field: 'Sunday', val: e.target.checked })} } /> <label><h5>Sunday</h5></label> <br />
                    <input type="checkbox" name="Monday" value={schedule.Monday} 
                         onChange={ (e)=>{dispatch({type: 'updatecheck', field: 'Monday', val: e.target.checked })} } /> <label><h5>Monday</h5></label> <br />
                    <input type="checkbox" name="Tuesday" value={schedule.Tuesday} 
                         onChange={ (e)=>{dispatch({type: 'updatecheck', field: 'Tuesday', val: e.target.checked })} } /> <label><h5>Tuesday</h5></label> <br />
                    <input type="checkbox" name="Wednesday" value={schedule.Wednesday} 
                         onChange={ (e)=>{dispatch({type: 'updatecheck', field: 'Wednesday', val: e.target.checked })} } /> <label><h5>Wednesday</h5></label> <br />
                    <input type="checkbox" name="Thursday" value={schedule.Thursday} 
                         onChange={ (e)=>{dispatch({type: 'updatecheck', field: 'Thursday', val: e.target.checked })} } /> <label><h5>Thursday</h5></label> <br />
                    <input type="checkbox" name="Friday" value={schedule.Friday} 
                         onChange={ (e)=>{dispatch({type: 'updatecheck', field: 'Friday', val: e.target.checked })} } /> <label><h5>Friday</h5></label> <br />
                    <input type="checkbox" name="Saturday" value={schedule.Saturday} 
                         onChange={ (e)=>{dispatch({type: 'updatecheck', field: 'Saturday', val: e.target.checked })} } /> <label><h5>Saturday</h5></label> 
                </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <button type="submit" className="btn btn-primary" 
                    onClick={ (e)=> {sendData(e)} }> Save </button>
                    </td>
                </tr>
            
           
            
        
                {/* <label> Sunday : </label>
                <div>
                <label htmlFor="male">Yes<span style={{margin:'10px'}}></span></label>
                <input type="radio"  name="Gender" value="male" id="male"
                onChange={(e)=>{dispatch({type:'update' , field:'Gender',val:e.target.value})}}  /><span style={{margin:'10px'}}></span>
               <label htmlFor="female">No<span style={{margin:'10px'}}></span></label>
                <input type="radio"  name="Gender" value="female" id="female"
                onChange={(e)=>{dispatch({type:'update' , field:'Gender',val:e.target.value})}} />
                </div> */}
                </table>
            </div>
            </div>
        </>
    )
}

export default ManageApp;