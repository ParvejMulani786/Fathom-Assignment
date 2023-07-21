import React from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import './dashboard.css'
import backImg from '../../Assets/backImg.jpg'
import profilephoto from '../../Assets/profilephoto.png'
import { useSelector } from "react-redux";

export default function Dashboard({setLoginUser}){
     const nav = useNavigate();
    // const user = useLocation();
    // console.log(user.state.email);

    const myUser = useSelector((state) => state.getUser);

    // const name=user.state.name;
    // const contact=user.state.contact;
    // const address=user.state.address;
    // const pincode=user.state.pincode; 
    // const occupation=user.state.occupation;
    // const email=user.state.email;
    // const password=user.state.password;

    const name= myUser.name;
    const contact= myUser.contact;
    const address= myUser.address;
    const pincode= myUser.pincode; 
    const occupation= myUser.occupation;
    const email= myUser.email;
    const password= myUser.password;

    return(
        <>
        {/* <h1>Dashboard</h1> */}
        <section className="backImg" style={{backgroundImage:`url(${backImg})`,backgroundRepeat:'no-repeat',height:'100vh'}}>
  <div class="container py-5 h-90">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-7 mb-8 mb-lg-5">
        <div class="card mb-3" style={{borderRadius: ".5rem;"}}>
          <div class="row g-0">
            <div class="col-md-12 gradient-custom text-center text-white"
              style={{borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem"}}>
                           <div className='button1' onClick={() => nav("/") }>Logout</div> 
              <img src={profilephoto}
                alt="Avatar" class="img-fluid my-5" style={{width: "120px", paddingTop:"25px"}}/>
                    {/* <p class="text-muted">{name}</p> */}
              <h1 style={{color:"black"}}>FATHOM SOFTWARE Pvt. Ltd.</h1>
              
              <i class="far fa-edit mb-5"></i>
            </div>
           
            <div class="col-md-14">
              <div class="card-body p-4">
                <h3>User Information</h3>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1" id="text1">
                <div class="col-6 mb-4" >
                    <h4>Name</h4>
                    <p>{name}</p>
                  </div>
                  <div class="col-6 mb-4">
                    <h4>Contact Number</h4>
                    <p >{contact}</p>
                  </div>
                  <div class="col-6 mb-4">
                    <h4>Address</h4>
                    <p >{address}</p>
                  </div>
                  <div class="col-6 mb-4">
                    <h4>Pincode</h4>
                    <p >{pincode}</p>
                  </div>
                  <div class="col-6 mb-4">
                    <h4>Email</h4>
                    <p >{email}</p>
                  </div>
                  <div class="col-6 mb-4">
                    <h4>Occupation</h4>
                    <p >{occupation}</p>
                  </div>
                  
                </div>
                
               
              </div>
            </div>
            
          </div>
          </div>
        </div>
      </div>
    </div>
  
 
</section>
        </>
    )
}