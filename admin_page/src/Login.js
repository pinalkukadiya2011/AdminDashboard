import React, { useState,useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import './App.css';
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from 'axios';

function Login() {

    const navigate = useNavigate();
     const[email,setEmail] = useState("");
     const[password,setPassword] = useState("");
    
    

function handleClick() {
const logindata =  axios.post('http://localhost:5000/Login', {
    email:email,
    password:password
 })
.then(function(response) {  
  const token = response.data.token;
  localStorage.setItem("token",response.data.token)
  if(token)
  {
    navigate('/sidebar')
  }
  else(
    alert('!invalid')
  )
  //  `('data',token);  
}).catch(function(err) {
    console.log(err);
 console.log("!incorreact")
    
 })
  }

 
  return(
    <>
           
      
         <div className="main_login d-flex  justify-content-center "  >
              <div className="main_form border border-5  " >
              <h2 className="mb-2 text-center text-white">LOGIN</h2>
                <div className="email">
                    <spna className="fs-2 me-2 ms-4">
                  <MdEmail/>
                  </spna>
                <input type="text" className="me-5 p-2" name="email" placeholder="Email" value={email} onChange={(e) =>setEmail( e.target.value)}></input>  
             
              </div>
                <div className="password">
                    <span className="fs-2 me-2 ms-4">
                <RiLockPasswordFill/>
                </span>
                
                <input type="password" className="me-5 p-2" name ="password" value={password} placeholder="Password" onChange={(e) =>setPassword( e.target.value)}></input>
                
                </div>
                <div className="check mt-5 ">
                   <input type="checkbox" ></input>
                   <span className="text-white ms-1">Remember Me </span>
                   <input type="checkbox" className="ms-5"></input>
                   <span className="text-white ms-1">Forget Password </span>
                   </div>
                   <button className="mt-5 p-2 text-white " style={{width:"150px",backgroundColor:"#257784"}} >REGISTRATION</button>
       {/* <Link to="/sidebar">            */}
        <button className="mt-5 p-2 text-white "  style={{width:"150px",backgroundColor:"#257784"}} onClick={handleClick}> LOGIN</button>
        {/* </Link> */}


                </div>
                <Routes>
                  <Route path="/sidebar" element={<Sidebar/>}></Route>
                </Routes>
         </div>

    


        
    </>
  )
    
}
export default Login