import React, { useState } from 'react'
import axios from 'axios'
import './from.css'
import Carousels from '../Carousel'

export default function From() {
  // state
  const [nom, setNom]=useState('')
  const [prenom, setPrenom]=useState('')
  const [tel, setTel]=useState(null)
  const [date, setDate]=useState('')
  const [heure, setheure]=useState('')
  const [categaries, setcategaries]=useState('')
  const [type, setType]=useState('')
  const [valide, setValide]=useState(false)
  //Functions
  const savenom=(e)=>{
     setNom(e.target.value)
  }
  const saveprenom=(e)=>{
    setPrenom(e.target.value)
 }
 const savetel=(e)=>{
  setTel(e.target.value)
}
const savedate=(e)=>{
  setDate(e.target.value)
}
const saveheure=(e)=>{
  setheure(e.target.value)
}
const savecateg=(e)=>{
  setcategaries(e.target.value)
}
const savetypoe=(e)=>{
  setType(e.target.value)
}
//inputes
  const inputs=[
    {
      id:1,
      label:'Prenom',
      pla:'votre Prenom',
      type:'text',
      value:prenom,
      fonintup:saveprenom,
    },
    {
      id:2,
      label:'Nom',
      pla:'votre Nom',
      type:'text',
      value:nom,
      fonintup:savenom,
    },
    {
      id:3,
      label:'Tel',
      pla:'77 777 77 77',
      type:'tel',
      min:9,
      max:9,
      value:tel,
      fonintup:savetel,
    },
    {
      id:4,
      label:'Date',
      pla:'la date',
      type:'date',
      value:date,
      fonintup:savedate,
    },
    {
      id:5,
      label:'Heure',
      pla:"l'heure",
      type:'time',
      value:heure,
      fonintup:saveheure,
    }
  ]
//beaty
const beaty =["Pedicure","Ongles simple","Steam-pod greffage","Tresse Raw","Manucure","Permanent","Posture & customiser perruque"
  ,"Pose Greffage","Gel",'Tresse americaine','Tissage perruque','Makeup simple','Tresse simple','Fixage greffage','Makeup complet','Tresse Meche']  
const evenements=["Mariage","Bapteme","Anniversaire","Tabaski","Korite","Magal","autres"]
const imges=[ {id:1, img:'images/pub1.jpg', },{ id:2, img:'images/pub2.jpg', },{id:3,img:'images/pub3.jpeg', },{id:4,img:'images/pub4.jpeg',},{id:5,img:'images/pub5.jpg',}]
 //funSubmit
 const submit=(e)=>{
    e.preventDefault()
    try{
      console.log({nom:nom,prenom:prenom,numero:tel,categori:categaries, evnement:type, date:date, heure:heure});
    const doc = axios.post("https://mabase.cyclic.app/sendMail", {nom:nom,prenom:prenom,numero:tel,categori:categaries, evnement:type, date:date, heure:heure})
       doc.then((elm)=>{
           console.log(elm.data);
           if(elm.data){
            setValide(true);   setDate(''); setType(''); setNom(''); setTel(''); setPrenom(''); setcategaries(''); setheure('');
          }
       });
    }catch(err){
     console.log(err);
    }
 } 

return (
    <>
    <h1 className='video_p mt-5 res'>Reservation</h1>
      <div className="row mt-5">
    <form action="" className='from mt-3 col col-lg-6 col-12' onSubmit={submit}>
    {valide? <p className='valide'>Reservation valide</p>:null}
    <div class="input-group mb-3">
        <span class="input-group-text bg-primary text-white large " id="inputGroup-sizing-default">Categorie</span>

    <select class="form-select" value={categaries} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={savecateg} required>
      <option selected>select categarie</option>
      <option value="Studio">Studio</option>
      <option value="Beauty">Beauty</option>
      <option value="Decoration">Decoration</option>
    </select>
    </div>
{
  inputs.map((input)=>(
    <div class="input-group mb-3" key={input.id}>
        <span class="input-group-text bg-primary text-white large" id="inputGroup-sizing-default">{input.label}</span>
      <input type={input.type} class="form-control" value={input.value} maxLength={input?.max} minLength={input.min} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={input.pla} onChange={input.fonintup} required/>
    </div>
     ))
}
{
  categaries?
  <div class="input-group mb-3">
  <span class="input-group-text bg-primary text-white large" id="inputGroup-sizing-default">Evenement</span>
    <select class="form-select" value={type} aria-label="Default select example" onChange={savetypoe} required>
    <option selected>select</option>
    {categaries==="Studio"?
<>
    <option value="studio">au Studio</option>
    <option value="mariage">Mariage</option>
    <option value="apteme">Bapteme</option>
    <option value="anniv">Anniversaire</option>
    <option value="domicile">Domicile</option>
    <option value="ext">Exterieur</option>
</>    
    :categaries==="Beauty"?
<>
  {
    beaty.map((beaty)=>(
      <option value={beaty}>{beaty}</option>
      ))
    }
</>
   :categaries==="Decoration"?
<>
  {
    evenements.map((even)=>(
      <option value={even}>{even}</option>
      ))
    }
</>
  
  :null}
  </select>
  </div>
  :null
}

    <div class="input-group mb-3 large">
      <input type={'submit'} class="form-control btn btn-primary " value={"Envoi"}/>
    </div>
</form>
<div className="col col-lg-6 col-12"><Carousels table={imges} imgclasse={'imgcarAcc'}/></div>
</div>
</>
  )
}
