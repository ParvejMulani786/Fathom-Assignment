import React from 'react';
import logo from '../Assets/logo (1).png'

export default function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img style={{width:"150px", height:'80px'}}src={logo}/></a>
  

  <div style={{ position:"absolute", top:'0',right:'0',width:'250px',textAlign:"right", alignItems:"center"}} className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/registration">Registration</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/logIn">Log In</a>
      </li>
      
      
    </ul>
    
  </div>
</nav>
        </>
    )
}