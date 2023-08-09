const expres  = require('express')
const routes = require('./route')
const bodyParser = require('body-parser')
const cors = require('cors')
const prot= 8000;

const app = expres();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use(routes)

app.listen(prot, ()=> console.log("http//localhost:"+prot))