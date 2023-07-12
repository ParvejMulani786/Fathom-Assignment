import React,{useState} from 'react'
import axios from 'axios';
import './registration.css';
import { useNavigate } from 'react-router-dom';
import Validation from './Validation';

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
const[ errors, setErrors ] = useState({})

function handleInput(event){
 const newObj = { ...user , [event.target.name] : event.target.value }
 setUser(newObj)
 console.log(user);
}







 function register(e) {
    // alert("register function called");
    e.preventDefault();
    setErrors(Validation(user));
    console.log(errors);
 
 
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
      // else{
      //   alert("Please fill all details")
        
      //   // alert("");
        

      // }
    
    }
 


    return(
        <>
        
       
        <div className="register">
            <h1>Registration</h1>
            {/* <form onSubmit={register}> */}
            
            <input type="text" name='name' placeholder='Enter Name' onChange= {handleInput}/>
            {errors.name && <p style={{color:'red', fontSize:'12px', textAlign:"start", paddingLeft:'20px'}}>{errors.name}</p>}

            <input type="text" name='contact' placeholder='Enter Contact' onChange= {handleInput}/>
            {errors.contact && <p style={{color:'red', fontSize:'12px', textAlign:"start", paddingLeft:'20px'}}>{errors.contact}</p>}

            <input type="text" name='address' placeholder='Enter Address' onChange= {handleInput}/>
            {errors.address && <p style={{color:'red', fontSize:'12px', textAlign:"start", paddingLeft:'20px'}}>{errors.address}</p>}

            <input type="text" name='pincode' placeholder='Enter Pincode' onChange= {handleInput}/>
            {errors.pincode && <p style={{color:'red', fontSize:'12px', textAlign:"start", paddingLeft:'20px'}}>{errors.pincode}</p>}

            <input type="text" name='occupation' placeholder='Enter Occupation' onChange= {handleInput}/>
            {errors.occupation && <p style={{color:'red', fontSize:'12px', textAlign:"start", paddingLeft:'20px'}}>{errors.occupation}</p>}

            <input type="text" name='username' placeholder='Enter Username / Email' onChange= {handleInput}/>
            {errors.username && <p style={{color:'red', fontSize:'12px', textAlign:"start", paddingLeft:'20px'}}>{errors.username}</p>}

            <input type="password" name='password' placeholder='Enter Password' onChange= {handleInput}/>
            {errors.password && <p style={{color:'red', fontSize:'12px', textAlign:"start", paddingLeft:'20px'}}>{errors.password}</p>}

            <input type="password" name='repassword' placeholder='Re - Enter Password' onChange= {handleInput}/>
            {errors.repassword && <p style={{color:'red', fontSize:'12px', textAlign:"start", paddingLeft:'20px'}}>{errors.repassword}</p>}

            
            <div type='submit' className='button' onClick={register}>Register</div>
            {/* <div className='submit'>
              <input type='submit'  value="Register "/>
            </div>
            
            </form> */}
            
        </div>
        
       
        </>
    )
}