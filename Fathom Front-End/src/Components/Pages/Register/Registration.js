import React,{useState} from 'react'
import axios from 'axios';
import './registration.css';
import { useNavigate } from 'react-router-dom';
import Validation from './Validation';
import { addUser } from '../../Redux/Actions/index'
import { useDispatch } from 'react-redux';


export default function Registration(){
    const nav=useNavigate();
    const dispatch = useDispatch();
  
  const[user,setUser]=useState({
    name:"",
    contact:"",
    address:"",
    pincode:"",
    occupation:"",
    email:"",
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
 
    if(errors.password== "" && errors.repassword== "" ){
      if(user.name && user.contact && user.address && user.pincode && user.occupation && user.email && (user.password == user.repassword)){
        // alert("posted");   
       
        


        axios.post("http://localhost:8080/register", user )
        .then((response)=>
        {
          alert(response.data.message);
          if( response.data.message == "Successfully Registration Done !!"){
             // dispatch action to add user in Redux Store
             if(response.data.user != ""){
              console.log("Response: " + response.data.user.name);
              dispatch(addUser(response.data.user));
              nav("/login")
             }
           
          }
       
        })}
        else if (user.password != user.repassword){
          alert("Please re-enter password");
        }
    }
    
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

            <input type="text" name='email' placeholder='Enter Email' onChange= {handleInput}/>
            {errors.email && <p style={{color:'red', fontSize:'12px', textAlign:"start", paddingLeft:'20px'}}>{errors.email}</p>}

            <input type="password" name='password' placeholder='Enter Password' onChange= {handleInput}/>
            {errors.password && <p style={{color:'red', fontSize:'12px', textAlign:"start", paddingLeft:'20px'}}>{errors.password}</p>}

            <input type="password" name='repassword' placeholder='Re - Enter Password' onChange= {handleInput}/>
            {errors.repassword && <p style={{color:'red', fontSize:'12px', textAlign:"start", paddingLeft:'20px'}}>{errors.repassword}</p>}

            
            <div type='submit' className='button' onClick={register}>Register</div>
            
            {/* <div type='submit' className='button' onClick={dispatch(addUser())}>Register</div> */}

            
            
        </div>
        
       
        </>
    )
}