import loggedReducer from "./LoggedSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer:{
        logged:loggedReducer
    }
});