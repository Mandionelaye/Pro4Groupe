import React from 'react';
import './cadre.css';
import { NavLink} from 'react-router-dom';


export default function Cadre() {

  return (
    <div className='container-fluid cadre mt-5'>
        <div className="row">
            <div className="col col-xl-6 col-12 orange">
                <h1 className="titre_cadre" data-aos="fade-up">Studio</h1>
              <div className="text" data-aos="fade-up">
                <p className="p_cadre">Avec Pro4 Groupe vos Photos<br/> sont encore meilleure</p>
              </div>
              <div className="btn_cadres">
                <NavLink to={"/Studio"} className='Link'>
                <button className="btn btn_cadre btn_blue"><p>
                  visite
                  </p>
                  </button>
                  </NavLink>

              </div>
            </div>
            <div className="col col-xl-6 col-12 black">
                <h1 className="titre_cadre" data-aos="fade-up">Beauty</h1>
            <div className="text" data-aos="fade-up">
                <p className="p_cadre">Avec Pro4 Groupe vous<br/> êtes encore plus belle</p>
            </div>  
            <div className="btn_cadres">
                <NavLink to={"/Beauty"} className='Link'>
                <button className="btn btn_cadre btn_rose"><p>
                  visite 
                  </p> </button>
                  </NavLink>
            </div>          
            </div>
            <div className="col col-xl-6 col-12 red">
                <h1 className="titre_cadre" data-aos="fade-up">Shop</h1>
            <div className="text" data-aos="fade-up">
                <p className="p_cadre"> Pro4 Groupe vous propose<br/> les meilleurs produits</p>
              </div>
              <div className="btn_cadres">
                <NavLink to={"/Shop"} className='Link'>
                <button className="btn btn_cadre btn_black"><p>
                  visite 
                  </p></button>
                  </NavLink>
              </div>
            </div>
            <div className="col col-xl-6 col-12   bleu">
                <h1 className="titre_cadre" data-aos="fade-up">Deco</h1>
            <div className="text" data-aos="fade-up">
                <p className="p_cadre">Avec Pro4 Groupe la décoration<br/> est une passion</p>
              </div>
              <div className="btn_cadres" >
                <NavLink to={"/Beauty"} className='Link'>
                <button className="btn btn_cadre btn_red"><p>
                  visite
                  </p></button>
                  </NavLink>
              </div>
            </div>
        </div>
    </div>
  )
}
