'use strict';
const express = require("express");
const app = express();
var bodyParser = require('body-parser');
var Tournaments = require ("./models/tournament.js");

app.use(express.static('public'));
app.use(require("body-parser").urlencoded({extended: true})); // parse form submissions
let handlebars =  require("express-handlebars");
var tournamentMethods = require ("./models/tournamentMethods.js");
var Tournaments = require('./models/tournament.js')
var mongo = require ('mongodb');

app.engine(".html", handlebars({extname: '.html'}));





app.get('/', (req, res, next) => {
  tournamentMethods.getAll().then((items) => {
    res.render('home', {tournaments: items}); 
  }).catch((err) =>{
    return next(err);
      console.log(butt);
  });
});

app.get('/get', (req, res, next) => {
 tournamentMethods.getOne(req.query.butt).then((items) => {
     res.render('details', {result: items}); 
  }).catch((err) =>{
    return next(err);
     console.log(req.query);
 });
});



app.post('/get', (req, res) => {
  console.log(req.body); // display parsed form submission
});

app.get('/delete', (req,res) => {
 let result = tournamentMethods.killOne(req.query.butt);
  res.render(__dirname + '/views/delete.html', {butt: req.query.butt, result: result }); 
  
});
app.post('/delete', (req, res) => {
  console.log(req.body); // display parsed form submission
});



app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");



// send content of 'home' view
app.get('/', (req,res) => {
 res.render('home');
});

app.post('/add', function(req, res){
    console.log(req.body);
    Tournaments.update({'butt':req.body.butt,}, req.body, {upsert:true}, (err, result) =>{
        console.log(result);
        res.render('added', {result: req.body});
    });
    
});

// define 404 handler
app.use( (req,res) => {
 res.type('text/plain'); 
 res.status(404);
 res.send('404 - Not found');
});
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files

app.listen(app.get('port'), () => {
 console.log('Express started'); 
});




