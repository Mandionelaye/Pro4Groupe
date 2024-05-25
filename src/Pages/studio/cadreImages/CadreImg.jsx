import React, { useRef } from 'react'
import './cadreImg.css'

export default function CadreImg({tabimg}) {
     const elm = useRef(null);
     const next= (e)=>{
      e.preventDefault();
      elm.current.scrollLeft-=240;
    }
    const back=(e)=>{
      e.preventDefault();
      elm.current.scrollLeft+=240;
    }

  return (
    <div className='CadreImg' >
      <div className="ensemble_flechi">
     <button type="button" className='btn btn-transparent btnC' onClick={next}>
     <i className="fa-solid fa-less-than"></i>
     </button>
        <div className="imgCadre" ref={elm}>
        {   tabimg?
            tabimg.map((img)=>(
                <div className="cardimg" key={tabimg.lenght-1}>
                     <img src={`${img}.jpg`} alt="img" className="img1"/> 
                </div>
            )):
            <i class="fa-solid fa-spinner fa-spin-pulse" style={{"color": "#2258b4", "fonSize":"80px", "textAligne":"center"}}></i>
            }
        </div>
        <button type="button" className='btn btn-primary-outline btnC' onClick={back}>
        <i className="fa-solid fa-greater-than"></i>
        </button>
        </div>
    </div>
  )
}
