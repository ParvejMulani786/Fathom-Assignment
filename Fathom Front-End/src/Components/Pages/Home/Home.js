import React from 'react'
import img1 from '../../Assets/fathom Office.jpg'
import './Home.css'

export default function Home(){
    return(
        <>
        <div >
            <img className="responsive" style={{paddingTop:"5rem"}} src={img1} />
        </div>
        </>
    )
}