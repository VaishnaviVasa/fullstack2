import { useRef, useState,useEffect } from "react";
import Ecommerce from "./Ecommerce";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function Login()
{
    const first=useRef(null);
    const sec=useRef(null);
    const[msg,setmsg]=useState("");
    useEffect(()=>{
        first.current.focus();
    });
    const sub=(event)=>{
        event.preventDefault();//prevent reload
        console.log(first.current.value);
        console.log(sec.current.value);
        if(first.current.value==sec.current.value){
            console.log("correct");
        }
        else{
            console.log("Incorect");
        }
        first.current.value='';
        sec.current.value='';   
        setmsg(
            <Routes>
                <Route path="/" element={<Ecommerce/>}/>
            </Routes>
        );
    };
    return (
        <div className="d-flex justify-content-center">
            <div className="card" style={{width:'300px',padding:'20px'}}>
            <h2>Login</h2>
            <p>Provide your details to login</p>
            <form onSubmit={sub}>
                <h5>College id</h5>
                <input type="text" placeholder="Enter email id" ref={first} /><br></br>
                <h5>Password</h5>
                <input type="password" placeholder="Enter password" ref={sec}/>
                <button class="m-3 btn btn-success" style={{display:"flex",flexDirection:"row"}}>Submit</button>
            </form>
            {msg}
            </div>
        </div>
    );
}
export default Login;