import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'


export default function Footer() {
  return (
   <>
   <footer className="text-center text-lg-start bg-dark text-white mt-5">

     <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

       <div className="me-5 d-none d-lg-block">
         <span>Pro4 Groupe</span>
       </div>

       <div>
         <a href="https://www.facebook.com/palm.lerichartcct" className="me-4 link-secondary">
           <i className="fab fa-facebook-f"></i>
         </a>
         <a href="#" className="me-4 link-secondary">
           <i className="fab fa-twitter"></i>
         </a>
         <a href="https://wa.me/+221772545324" className="me-4 link-secondary">
           <i className="fab fa-whatsapp"></i>    
         </a>
         <a href="https://instagram.com/pro4_groupe?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" class="me-4 link-secondary">
           <i className="fab fa-instagram"></i>
         </a>
       </div>
     </section>


     <section class="">
       <div className="container text-center text-md-start mt-5">
         <div className="row mt-3">
           <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
             <h6 className="text-uppercase fw-bold mb-4">
             <img src="images/logo.jpeg" alt="" className='text-secondary img_logo log'/>  Pro4 Groupe
             </h6>
             <p>
             Pro4 groupes est une star up qui font de nombreuses activités. Il dispose d'un 
               salon de make up et a même une boutique de vêtements et 
               d'autre activités extraordinaire.
             </p>
           </div>
   

           <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
             <h6 className="text-uppercase fw-bold mb-4">
               Products
             </h6>
             <p>
             <NavLink to={"/Studio"} className="text-reset">Photographie</NavLink>
             </p>
             <p>
               <NavLink to={"/Decoration"} className="text-reset">Décoration</NavLink>
             </p>
             <p>
               <NavLink to={"/Shop"} className="text-reset">Boutique</NavLink>
             </p>
             <p>
               <NavLink to={"/Beauty"} className="text-reset">Make Up</NavLink>
             </p>
           </div>

           <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
             <h6 className="text-uppercase fw-bold mb-4">
               Categories
             </h6>
             <p>
               <NavLink to={"/Studio"} className="text-reset">Studio</NavLink>
             </p>
             <p>
             <NavLink to={"/Beauty"} className="text-reset">Beauty</NavLink>
             </p>
             <p>
             <NavLink to={"/Decoration"} className="text-reset">Deco</NavLink>
             </p>
             <p>
             <NavLink to={"/Shop"} className="text-reset">Shop</NavLink>
             </p>
           </div>

           <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
             <p><i className="fas fa-home me-3 text-secondary"></i> Camberene2, terminus bus 29 & 79, SN</p>
             <p>
               <i className="fas fa-envelope me-3 text-secondary"></i>
               Pro4-groupe@gmail.com
             </p>
             <p><i className="fas fa-phone me-3 text-secondary"></i> +221 77 254 53 24 ou 76 029 35 00 </p>
             <p><i className="fas fa-print me-3 text-secondary"></i>+221 33 838 44 65</p>
           </div>
         </div>
       </div>
     </section>
   
     <div class="text-center p-4" style={{"background-color": "rgba(0, 0, 0, 0.125)"}}>
       © 2023 Copyright:
       <a class="text-reset fw-bold" href="mailto:seydinamandionem9@gmail.com">BY The BUUR_JOIE</a>
     </div>
   </footer>

   </>
  )
}



