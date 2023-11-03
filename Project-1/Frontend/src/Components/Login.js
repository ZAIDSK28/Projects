import axios from 'axios';
import {useReducer, useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Routes,Route, useNavigate } from 'react-router-dom';
import Register from './Register';
import LoggedSlice, {login} from './LoggedSlice'
import store from './store';

const init = {
    email:"",
    password:""
}

//second requirement for useReducer - updation function
const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val};
        case 'clear' :
            return init;   
    }
}

const Login =  () => {
    //const {setAuth} = useContext(AuthContext);
    const udispatch = useDispatch();   //updating the store
    const mystate = useSelector((state)=>state.logged) 

    const [user, dispatch] = useReducer(reducer, init);
    let navigate = useNavigate();

    const sendData = (e) => {
        e.preventDefault();
        
        console.log("state modified")
        axios.post("http://localhost:8080/login/getbyrole",user)
        .then(response => {
            console.log(response.data);
            if(response.data.role === "patient")
            {
                
                localStorage.setItem("loggedinuser", JSON.stringify(response.data));
                // store.dispatch({type:'login'})
                udispatch(login())
                navigate('/patientHome/ui');
            }
            else if(response.data.role === "hospital")
            {
                localStorage.setItem("loggedinuser", JSON.stringify(response.data));
                udispatch(login())
                navigate('/hospitalHome/ui');
            }
            else if(response.data.role === "admin")
            {
                localStorage.setItem("loggedinuser", JSON.stringify(response.data));
                udispatch(login())
                navigate('/adminHome/ui');
            }
            else if(response.data.role === "doctor")
            {
                localStorage.setItem("loggedinuser", JSON.stringify(response.data));
                udispatch(login())
                navigate('/doctorHome/ui');
            }

            
         })
       .catch(error =>{
            console.log(error);
            alert("error");
        })
    }   

    return (
        <div  className="vh-100"  style={{ backgroundColor: '#F4FDFB', position: 'centre'}}>
            <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10 col-md-8 col-lg-10 col-xl-6">
            <div className="card shadow-2-strong">
            <div className="card-body p-5 text-center">
            <h4 className="text-center brand-color"> Sign In </h4><br></br>
            <form>
            <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Enter Email : </label>
                <div className='col-sm-5'>
                <input type="text" className="form-control" name="email" value={user.email}
                onChange={ (e)=>{dispatch({type: 'update', field: 'email', val: e.target.value })} } />
                </div>
                </div>
                </div>
                <div className="form-outline mb-4">
                <div className='form-group row'>
                <label className='col-sm-5 col-form-label'> Enter Password : </label>
                <div className='col-sm-5'>
                <input type="password" className='form-control' name="password" value={user.password}
                onChange={ (e)=>{dispatch({type: 'update', field: 'password', val: e.target.value })} } />
                </div>
                </div>
                </div>
                <br/>
                <div className='text-center'>
                <button type="submit" className="btn btn-primary btn-block"
                onClick={ (e)=> {sendData(e)} }>Login</button>  
            <br/>
            <br/>
                {/* <a href='/'>New User?Register here...</a> */}
                </div>    
            </form>
            {/* {mystate.loggedIn.toString()} <br/> */}

            <Routes>
            <Route path="/register/*" element={<Register />} />
            </Routes>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Login;