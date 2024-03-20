const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const value = require("./modal/main.js");
const ejsMate = require("ejs-mate");
//const fs = require('fs');
const data = require("./modal/data.js")

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.engine("ejs",ejsMate);
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
    console.log("db err")
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/business");
}

// root rooute
app.get("/",(req,res)=>{
    res.send("server is working");
    console.log("data rec.");
});


//index route
app.get('/quant',async(req,res)=>{
  let values = await value.find({}); 
    res.render("show.ejs",{values});
}); 


  app.post("/quant/filter", async (req, res) => {
    try {
        const { ticker } = req.body;        
        const result = await value.find({ ticker: ticker });
        console.log("workinggg");
        console.log(result);
        console.log(req.body);

      res.render("result.ejs", { values: result });
  } catch (error) {
        console.error("Error:", error);       // to handle the erroes
      res.status(500).send("Internal Server Error");
  }
});





app.listen(8080,()=>{
    console.log("app is listening on port 8080");
});



