import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {logout} from './LoggedSlice'

export default function Logout  () {
    let dispatch = useDispatch();
    let navigate=useNavigate();
    return (
        <div>
            <button className="btn btn-outline-success" onClick={()=> {dispatch(logout()); localStorage.removeItem("loggedinuser"); navigate("/")}}>Logout</button>
            
        </div>
    );

}