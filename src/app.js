const express =require("express");
const app=express();
const port = process.env.PORT || 1200;
const hbs=require("hbs");
const path =require("path");
const tem=path.join(__dirname,"../public");
const HeaderPartails=path.join(__dirname,"./templates/partials");
const For_views=path.join(__dirname,"./templates/views");
// console.log(For_views)
app.set('views', For_views)
app.set('view engine', "hbs")
hbs.registerPartials(HeaderPartails)
// app.use(express.static(tem)) 

app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use("/css",express.static(path.join(__dirname,"../public/css")))
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use("/js",express.static(path.join(__dirname,"../public/js")))
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.use("/img",express.static(path.join(__dirname,"../public/img")))

app.get("/",(req,res)=>{
res.render("index")

})

app.get("/about",(req,res)=>{
    res.render("about")
    
    })

app.get("/service",(req,res)=>{
    res.render("Service")
    
    })

    app.get("/Products",(req,res)=>{
        res.render("Products")
        
        })

        app.get("/clients",(req,res)=>{
            res.render("clients")
            
            })

app.get("*",(req,res)=>{
    res.send("404")
    
    })
app.listen(port,(erre)=>{
    console.log(`${port} ${erre}`)
})
