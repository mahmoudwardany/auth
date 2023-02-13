import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../feature/authSlice';
function Register() {
  const auth =useSelector((state)=>state.auth)
  const disptach=useDispatch()
  console.log(auth)
  const navigate=useNavigate()
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:""
        })
        useEffect(()=>{
          if(auth._id){
            navigate('/login')
          }
        },[auth._id,navigate])
const handleSubmit=(e)=>{
e.preventDefault()
disptach(registerUser(user))

}
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"
        onChange={(e)=>setUser({...user,name:e.target.value})}
        />
    </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
         onChange={(e)=>setUser({...user,email:e.target.value})}
        />
    </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
       onChange={(e)=>setUser({...user,password:e.target.value})}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {auth.registerStatus === 'pending' ? "submittin":"Register"}
      </Button>
      {auth.registerStatus === 'rejected'?<p>{auth.registerError}</p>:null}
    </Form>
    </>
  )
}

export default Register