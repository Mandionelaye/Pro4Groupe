import React, { useEffect } from 'react'
import './accuil.css'
import AOS from "aos"
import 'aos/dist/aos.css'
import Cadre from './cadre/Cadre'
import ReactPlayer from 'react-player'
import From from '../../composents/form/From'




export default function Accuil() {
  const tabimg=['images/studio1.jpg','images/beauty2.jpeg','images/ac_pre3.jpg','images/ac_pre4.jpg']
  useEffect(()=>{
     AOS.init({
      duration:1000,
      throttleDelay: 109,
      debounceDelay: 70,
     })
  }, [])
  const extrait=[
   {id:1,img:'images/extrait1.jpg',},{ id:2, img:'images/extrait2.jpg',},{ id:3, img:'images/extrait3.jpg',}, {id:4,img:'images/extrait4.jpg',},{ id:5, img:'images/extrait5.jpg',},{ id:6, img:'images/extrait6.jpg',}]
  return (
    <>
    <div className="container-fluid accuil">
      <img src="images/accuil.jpg" alt="" className="img_accuil" />
    </div>
    <div className="container">
    <div className="liste_accuil"><ul className='accuil_ul' data-aos="fade-up"><li>La Qualité au Meilleur Prix </li></ul></div>
    <div className="accuil_pre">
      {
         tabimg.map((img)=>(
          <div className="accuil_pre_item m-3" data-aos="fade-up" key={tabimg.length-1}>
          <img src={img} alt="img" className="accuil_pre_item_img" />
        </div>
         ))
      }
    </div>
    </div>
    <Cadre/>
    <div className='container mt-5'>
       <div className="video">
        <h1 className='video_p'>Présentation</h1>
        <div className="elmvideo" data-aos="fade-up">
           <ReactPlayer url={'https://youtu.be/dcqBj_7C6oo?si=g4sxzTljL9g83GMg'} loop playing muted controls  width={'100%'} height={'90vh'}/>
        </div>
        <div className="cadreExtre">
        <h1 className='video_p mt-5'>Extrai</h1>
        <div className="row">
         { 
         extrait.map((img)=>(
            <div className="col-lg-4 col-md-6 col-sm-12" key={img.id} data-aos={"fade-up"}>
            <div class="card mt-5">
               <img src={img.img} class="card-img-top imgExtre"  alt="..."/>
            </div>
            </div>
               ))
         } 
        </div>
        </div>
       </div>
      <From/>
    </div>
    </>
  )
}
