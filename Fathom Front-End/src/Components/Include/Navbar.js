import React from 'react'
import logo from '../Assets/logo (1).png'
import { FaLinkedinIn, FaInstagramSquare , FaFacebookSquare} from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi";
import './navbar.css'

export default function Navbar(){
    return(
        <>
        <nav className='main-nav'>
            {/* logo  */}
            <div className='logo'>
            <img className='responsive'  style={{width:'100%', height:'auto'}}   src={logo} />
            </div>

            {/* navbar links */}
            <div className='menu-link'>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/aboutUs'>About Us</a>
                    </li>
                    
                    <li>
                        <a href='/login'>Log In / Register</a>
                    </li>
                    <li>
                        <a href='/contactUs'>Contact Us</a>
                    </li>
                </ul>
            </div>

            {/* social media links */}

            <div className='social-media'>
                <ul className='social-media-desktop'>
                    <li>
                        <a href="https://www.facebook.com/fathomsoftwareindia/" target="_blank"><FaFacebookSquare className='facebook'/></a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/fathomsoft/" target="_blank"><FaInstagramSquare className='instagram'/></a>
                    </li>

                    <li>
                    <a href="https://www.linkedin.com/company/fathom-software-llc/" target="_blank"><FaLinkedinIn className='linkedIn'/></a>
                    </li>
                </ul>
            </div>

            {/* hamburger menu */}
            <div className='hamburger-menu'><a href='#'><GiHamburgerMenu/></a></div>
        </nav>
        </>
    )
}