import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

export default function Carousels({table, imgclasse}) {

  return (
    <Carousel autoPlay interval={6000} infiniteLoop showIndicators={false} showStatus={false} showThumbs={false} >
    {
      table.map((image)=>(
        <div key={table.length-1}>
          <img src={image.img} alt="img" className={imgclasse}/>
        </div>
      ))
    }
  </Carousel>
  )
}
