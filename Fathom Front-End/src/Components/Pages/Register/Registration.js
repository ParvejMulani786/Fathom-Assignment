import React,{useState} from 'react'
import axios from 'axios';
import './registration.css';
import { useNavigate } from 'react-router-dom';

export default function Registration(){
    const nav=useNavigate();
  
  const[user,setUser]=useState({
    name:"",
    contact:"",
    address:"",
    pincode:"",
    occupation:"",
    username:"",
    password:"",
    repassword:""

});

 const register = (e) => {
    // alert("register function called");
  e.preventDefault();
  
    if(user.name && user.contact && user.address && user.pincode && user.occupation && user.username && (user.password == user.repassword)){
      // alert("posted");   
      axios.post("http://localhost:8080/register", user )
      .then((response)=>
      {
        alert(response.data.message);
        if( response.data.message == "Successfully Registration Done !!"){
          nav("/login")
        }
     
      })}
      else if (user.password != user.repassword){
        alert("Please re-enter password");
      }
      else{
        alert("Please fill all details")
        
        // alert("");
        

      }
    
    }
 


    return(
        <>
        
       
        <div className="register">
            <h1>Registration</h1>
            
            <input type="text" placeholder='Enter Name' onBlur= {(e)=>setUser({...user, name:e.target.value})}/>

            <input type="text" placeholder='Enter Contact' onBlur= {(e)=>setUser({...user, contact:e.target.value})}/>

            <input type="text" placeholder='Enter Address' onBlur= {(e)=>setUser({...user, address:e.target.value})}/>

            <input type="text" placeholder='Enter Pincode' onBlur= {(e)=>setUser({...user, pincode:e.target.value})}/>

            <input type="text" placeholder='Enter Occupation' onBlur= {(e)=>setUser({...user, occupation:e.target.value})}/>

            <input type="text" placeholder='Enter Username / Email' onBlur= {(e)=>setUser({...user,  username:e.target.value})}/>

            <input type="password" placeholder='Enter Password' onBlur= {(e)=>setUser({...user,  password:e.target.value})}/>

            <input type="password" placeholder='Re - Enter Password' onBlur= {(e)=>setUser({...user,  repassword:e.target.value})}/>

            
            <div type='submit' className='button' onClick={register}>Register</div>
           

            
        </div>
        
       
        </>
    )
}