let express = require("express");
let app = express();
let port = process.env.PORT || 3000;
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine", "ejs");

let dogs = ["fluff", "heck", "chong", "pupper", "smolli"];

app.get("/", function(req,res){
    res.render("home");
});

app.post("/adddog", function(req,res){
    let newDog = req.body.newdog;
    dogs.push(newDog);
    res.redirect("/dogs");
});

app.get("/dogs", function(req,res){
    res.render("dogs",{dogs:dogs});
});

app.listen(port, function(){
    console.log("START");
});