const produit = require('./BD');

let panier = []
const affiche= async(req,res)=>{
    try{
     res.status(200).json(produit)
    }catch(err){
         console.log(err);
    }
      
}


const addPanier= async(req,res)=>{
    try{
        const {id,photo,nomPrdt,prix} =req.body
        panier.push({
        id:id,
        photo:photo,
        nomPrdt:nomPrdt,
        prix:prix,
        })
     res.status(200).json(panier)
    }catch(err){
         console.log(err);
    }
}


const suppPanier= async(req,res)=>{
    const {id} =req.body
    try{
       panier = panier.filter((elm)=> elm.id!== id)
     res.status(200).json(panier)
    }catch(err){
         console.log(err);
    }
}


const affichePanier= async(req,res)=>{
    try{
     res.status(200).json(panier)
    }catch(err){
         console.log(err);
    }
}

module.exports= {affiche:affiche, addPanier:addPanier, suppPanier:suppPanier, affichePanier:affichePanier}








