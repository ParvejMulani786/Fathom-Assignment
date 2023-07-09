import React from 'react'

import img2 from '../../Assets/home.png'
import './Home.css'
import AboutUs from '../AboutUS/AboutUS'
import ContactUS from '../ConatctUS/ContactUS'

export default function Home(){
    return(
        <>
        <div className='home'>
            {/* <img className="responsive" style={{paddingTop:"5rem"}} src={img1} /> */}
        </div>
        <div >
            <img  style={{paddingTop:"5rem"}} src={img2} />
        </div>
            <div>
                     <AboutUs></AboutUs>
            </div>
            <div>
                    <ContactUS></ContactUS>
            </div>
        </>
    )
}