import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './login.css'
import axios from 'axios';


export default function LogIn(){
    const nav = useNavigate();
    const[loginUser, setLoginUser] = useState("");
    const[user, setUser] = useState(
       { 
        username:"",
        password:""
        }
    );
    

    
    async function submit(e){
        e.preventDefault();
        
            const response = await axios.post("http://localhost:8080/login",user)
                .then((response) =>{
                    alert(response.data.message)
                    if(response.data.message == "Successfully Login !!"){
                        setLoginUser(response.data.user);
                        let user = response.data.user;
                        console.log(user);
                        nav("/dashboard", {state:user})
                    }
                    
            }).catch((response)=>
            {
                console.log("Invalid username/password")
            })
                
        
    }
    return(
        <>
        <div className="login">
            <h1>Login</h1>
            <input type="text" placeholder='Enter Username / Email' onBlur= {(e)=> setUser({ ...user, username: e.target.value})}/>
            <input type="password" placeholder='Enter Password' onBlur = {(e) => setUser({...user, password:e.target.value})} />
            <div className='button' onClick = {submit}>Login</div>
            <div>or</div>
            {/* <div className='button'>Register</div> */}
           <div className='button' onClick={() => nav("/registration")}>Register</div> 
        </div>
        </>
    )
}