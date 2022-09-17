const express = require('express');
const multer = require('multer');
const aws = require("aws");
var data = require("./store");
const upload = multer();
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", "./templates");

app.get("/", (req, res) => {
    res.render("index", { data: data });
})

app.get("/delete/:ma", (req, res) => {
    data = data.filter((e) => {
        return e.maSP != req.params.ma;
    })
    res.redirect("/");
})

app.post("/", upload.single(), (req, res) => {
    data.push(req.body);
    res.redirect("/");
})

app.listen(port, () => {
    console.log("Server start in port: " + port);
})