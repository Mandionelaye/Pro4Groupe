import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"

export default function Header() {
  return (
   <>
<nav class="navmoi navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
       <img src="images/logo.jpeg" alt="" className='img_logo' />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-5" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li class="nav-item">
          <NavLink className="nav-link" aria-current="page"  to={"/"}>Accuil</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to={"/Studio"} className='nav-link' >Studio</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to={"/Beauty"} className='nav-link' >Beauty</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to={"/Decoration"} className='nav-link' >Decoration</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to={"/Shop"} className='nav-link' >Shop</NavLink>
        </li>
      </ul>
      <div class="d-flex">
            <NavLink to={"/Reservation"} className='nav-link me-3' >Reservation</NavLink>
            <a href="https://wa.me/+221772545324" className='me-3 am'><i class="fa-brands fa-whatsapp fa-bounce" style={{"color": "#62ac82"}}></i></a>
            <a href="mailto:Palmcc94@gmail.com" className='am'><i class="fa-solid fa-envelope"></i></a> 
      </div>
    </div>
  </div>
</nav>
   </>
  )
}
