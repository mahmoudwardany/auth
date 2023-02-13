import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
const initialState={
token:localStorage.getItem('token'),
name:"",
email:"",
_id:"",
registerStatus:"",
registerError:"",
loginStatus:"",
LoginError:"",
userLoaded:false

}
export const registerUser=createAsyncThunk('auth/authApi',
async(user,{rejectWithValue})=>{
    
try {
    const token=await axios.post('http://www.urlApi.com/register',{
    name:user.name,
    email:user.email,
    password:user.password
})
localStorage.setItem('token',token.data)
return token.data
    
} catch (error) {
    console.log(rejectWithValue)
}
}
)
export const loginUser=createAsyncThunk('auth/authApi',
async(user,{rejectWithValue})=>{
    
try {
    const token=await axios.post('http://www.urlApi.com/register',{
    email:user.email,
    password:user.password
})
localStorage.setItem('token',token.data)
return token.data
    
} catch (error) {
    console.log(rejectWithValue)
}
}
)
const authSlice=createSlice({
    name:"auth",
    initialState,
reducers:{
    loadUser(state,action){
const token=state.token
if(token){
   const user =jwtDecode(token) 
return{
    ...state,
        token,
        name:user.name,
        email:user.email,
        _id:user._id,
        userLoaded:true
}}
    },
    logoutUser:(state,action)=>{
localStorage.removeItem('token')
return{
    ...state,
    token:"",
    name:"",
email:"",
_id:"",
registerStatus:"",
registerError:"",
loginStatus:"",
LoginError:"",
userLoaded:false
}
    }
},
extraReducers:
{
    [registerUser.fulfilled]:(state,action)=>{
if(action.payload){
    const user = jwtDecode(action.payload)
    return{
        ...state,
        token:action.payload,
        name:user.name,
        email:user.email,
        _id:user._id,
        registerStatus:"success"
    }
}else return state
    },
    [registerUser.rejected]:(state,action)=>{
        return{
        ...state,
        registerStatus:"rejected",
        registerError:action.payload 
        }
    },
    [loginUser.fulfilled]:(state,action)=>{
        if(action.payload){
            const user = jwtDecode(action.payload)
            return{
                ...state,
                token:action.payload,
                name:user.name,
                email:user.email,
                _id:user._id,
                loginStatus:"success"
            }
        }else return state
            },
            [loginUser.rejected]:(state,action)=>{
                return{
                ...state,
                loginStatus:"rejected",
                LoginError:action.payload 
            }
        }
    }
    })
export const {loadUser,logoutUser}=authSlice.actions
export default authSlice.reducer