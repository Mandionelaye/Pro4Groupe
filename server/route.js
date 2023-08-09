const express = require('express')
const {affiche, addPanier, suppPanier, affichePanier}=require('./controlleur')
const routes = express.Router();

module.exports= routes

routes.get("/produits", affiche)

routes.post("/addproduits", addPanier)

routes.put('/suppProduit', suppPanier)

routes.get('/afficheProduit', affichePanier)