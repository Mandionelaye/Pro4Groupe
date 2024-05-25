import React, { useEffect } from 'react'
import './beauty.css'
import From from '../../composents/form/From';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {  NavLink } from 'react-router-dom';

export default function Beauty() {
  const tab1 = ["Pedicure","Manucure","Pose Greffage","Tissage perruque","Fixage greffage"] ;  
  const tab2 = ["Ongles simple","Permanent","Gel","Makeup simple","Makeup complet"];  
  const tab3 = ["Steam-pod greffage","Posture & customiser perruque","Tresse americaine","Tresse simple","Tresse Meche"]
  useEffect(()=>{
    Aos.init({
     duration:1000,
     throttleDelay: 109,
     debounceDelay: 70,
    })
 }, [])
  return (
    <>
     <div className="headbody">
       <img src="images/header.png" alt="" className='imgHB'/>
       <div className="borBeauty">
        <div className="row">
          <div className='col-md-6'>
              <p>Beauty</p>
          </div>
          <div className='col-md-6 text-center'>
          <NavLink to={"/Reservation"}>
                <button type="button">faire une reservation</button>
            </NavLink>
          </div>
        </div>
       </div>
     </div>
      <div className='container'>
       <div className="cardBeauty">
        <div className="row">
          <div className="col col-md-6 col-6 m1" data-aos="zoom-in-up">
            <img src="images/pub5.jpg" alt="" className='imgColl' />
          </div>
          <div className="col col-md-6 col-6">
            <div className="row">
              <div className=" col col-md-6 col-6" data-aos="zoom-in-up"><img src="images/beauty1.jpg" alt="" className="imgCol6" /></div>
              <div className="col col-md-6 col-6" data-aos="zoom-in-up"><img src="images/beauty2.jpeg" alt="" className="imgCol6" /></div>
              <div className="col col-md-6 col-6" data-aos="zoom-in-up"><img src="images/beauty3.jpeg" alt="" className="imgCol6" /></div>
              <div className="col col-md-6 col-6" data-aos="zoom-in-up"><img src="images/beauty4.jpg" alt="" className="imgCol6" /></div>
            </div>
          </div>
        </div>
       </div>
      <div className="produitB" data-aos="flip-down">
          <h1>Avec Pr4 Groupe les Femmes sont encore plus belle</h1>
          <h2>Activite</h2>
          <div className="row">
            <div className="col col-md-3 col-6">
              <ul>
                {
                  tab1.map((elm)=>(
                      <li>{elm}</li>
                      ))
                    }
              </ul>
            </div>
            <div className="col col-md-3 col-6">
            <ul>
                {
                  tab2.map((elm)=>(
                    <li>{elm}</li>
                    ))
                  }
              </ul>
            </div>
            <div className="col col-md-3 col-6">
            <ul>
                {
                  tab3.map((elm)=>(
                    <li>{elm}</li>
                    ))
                  }
              </ul>
            </div>
            <div className="col-md-3 col-6">
            <ul>
                <li>Tresse Raw</li>
              </ul>
              <div className="reserve">
              <p className='text-center'><i class="fa-solid fa-arrow-down fa-bounce" id="flesh"></i></p>
              <NavLink to={"/Reservation"}> <button type="button">faire une reservation</button></NavLink>
              </div>
            </div>
          </div>

      </div>
      <div className='galaryBeaty mt-5'>
          <div class="row">
            <div class="col col-lg-4 col-4 mb-4 mb-lg-0" >
              <img
                src="images/beauty5.jpeg"
                class="w-100 shadow-1-strong rounded mb-4 h4"
                alt="Boat on Calm Water"
                data-aos="fade-up"
              />

              <img
                src="images/beauty6.jpg"
                class="w-100 shadow-1-strong rounded mb-4 h2"
                alt="Wintry Mountain Landscape"
                data-aos="fade-up"
              />
            </div>

            <div class="col col-lg-4 col-4 mb-4 mb-lg-0">
            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1457996264730887%2F&show_text=true&width=267&t=0" width="267" 
            class="w-100 shadow-1-strong rounded mb-4 h-50 vd" data-aos="fade-up" style={{"border":"none","overflow":"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            
              <img
                src="images/beauty8.jpeg"
                class="w-100 shadow-1-strong rounded mb-4 h3"
                alt="Boat on Calm Water"
                data-aos="fade-up"
              />
            </div>

            <div class="col col-lg-4 col-4 mb-4 mb-lg-0">
              <img
                src="images/beauty9.jpg"
                class="w-100 shadow-1-strong rounded mb-4 h4"
                alt="Waves at Sea"
                data-aos="fade-up"
              />

              <img
                src="images/beauty10.jpg"
                class="w-100 shadow-1-strong rounded mb-4 h2"
                alt="Yosemite National Park"
                data-aos="fade-up"
              />
            </div>
          </div>
      </div>
      <From/>
    </div>
    </>
  )
}
