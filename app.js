const express = require ("express")
const ejs = require ("ejs");

const path = require ("path")



const app = express ();



//MIDDLEWARES
app.use(express.static('public'))


//TEMPLATE EnGINE
app.set("view engine","ejs");

app.get('/',(req,res)=>{
   res.sendFile(path.resolve(__dirname,"views/index.html"))
})

const port = 3001;

app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda başlatıldı..`)
})