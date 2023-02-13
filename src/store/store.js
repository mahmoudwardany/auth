import { configureStore } from "@reduxjs/toolkit";
import authSlice, { loadUser } from "../feature/authSlice";



export const store=configureStore({
    reducer:{
        auth:authSlice
    }
})

store.dispatch(loadUser(null))
