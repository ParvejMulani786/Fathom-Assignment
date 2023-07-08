import React from "react";
import {useLocation} from 'react-router-dom'
import './dashboard.css'
import backImg from '../../Assets/backImg.jpg'
import profilephoto from '../../Assets/profilephoto.jpg'

export default function Dashboard(){
    const user = useLocation();
    console.log(user.state.username);

    const name=user.state.name;
    const contact=user.state.contact;
    const address=user.state.address;
    const pincode=user.state.pincode; 
    const username=user.state.username;

    return(
        <>
        <h1>Dashboard</h1>
        <section className="backImg" style={{backgroundImage:`url(${backImg})`,backgroundRepeat:'no-repeat',width:'100%'}}>
  <div class="container py-5 h-80">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style={{borderRadius: ".5rem;"}}>
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white"
              style={{borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem"}}>
              <img src={profilephoto}
                alt="Avatar" class="img-fluid my-5" style={{width: "90px", paddingTop:"50px"}}/>
              <h5>Mother Teresa</h5>
              
              <i class="far fa-edit mb-5"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Information</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                <div class="col-6 mb-3">
                    <h6>Name</h6>
                    <p class="text-muted">{name}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Contact Number</h6>
                    <p class="text-muted">{contact}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Address</h6>
                    <p class="text-muted">{address}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Pincode</h6>
                    <p class="text-muted">{pincode}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Username</h6>
                    <p class="text-muted">{username}</p>
                  </div>
                  
                </div>
                
                <div class="d-flex justify-content-start">
                  <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                  <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                  <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
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