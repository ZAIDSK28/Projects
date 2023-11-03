import { createSlice } from "@reduxjs/toolkit"
import { Navigate, useNavigate } from "react-router-dom";

export const LoggedSlice = createSlice({
   
    name: 'logged',
    initialState: {
        loggedIn: false
    },
   
    reducers: {
        login: (state) => { console.log("in dispatch");return {loggedIn: true}} ,
            
        
        logout: (state) => {
            console.log("in logout dispatch")
            return {loggedIn: false}
        }
    }
})

export const {login} = LoggedSlice.actions;
export const {logout} = LoggedSlice.actions;

export default LoggedSlice.reducer;