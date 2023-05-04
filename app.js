const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const port =  process.env.PORT || 8000;


app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, './templates/views'));
hbs.registerPartials(path.join(__dirname, './templates/partials'));

app.use(express.static(path.join(__dirname, "./public")));

app.get("", (req, res) => {
    res.render('index');
})

app.get("/about", (req, res) => {
    res.render('about');
})

app.get("/weather", (req, res) => {
    res.render('weather.hbs');
})


app.get("*", (req, res) => {
    res.render('404error');
})

app.listen(port, () => {
    console.log("listening to port 8000....");
});