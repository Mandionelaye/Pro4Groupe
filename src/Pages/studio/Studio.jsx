import React, { useEffect } from 'react'
import './studio.css'
import AOS from "aos"
import 'aos/dist/aos.css'
import CadreImg from './cadreImages/CadreImg'
import From from '../../composents/form/From'
import { NavLink } from 'react-router-dom'
import listTab from './bd'

export default function Studio() {
  useEffect(()=>{
    AOS.init({
     duration:1000,
     throttleDelay: 109,
     debounceDelay: 70,
    })
 }, [])
  return (
    <>
     <div className="headerStudio">
     <img src="/images/pubStudio.jpg" alt="img" className='imgStudio'/>
      </div>
      <div className='container'>
      {listTab?
       listTab.map((elm)=>(
              <div className='elms' data-aos={"fade-up"}>
              <div className="titreElm">
                <div className='crBleu'>
                <h1>{elm.name}</h1>
                </div>
                <NavLink to={"/Reservation"}>
                  <button type="button" className='btn moiBtn'>reserver</button>
                  </NavLink>
              </div>
      
           <div className='CadreStudio'>
           <CadreImg tabimg={elm.tab}/>
           </div>
           </div>
        )):
        <i class="fa-solid fa-spinner fa-spin-pulse" style={{"color": "#2258b4", "fontSize":"100px", "textAlign": "center"}}></i>
      }
      <From/>
      </div>
    </>
  )
  }
