/*************************************/
/*     Index file for routing        */
/*   Abirami Robert Kennedy          */
/*          300934720                */
/*       16th February, 2019         */
/*************************************/
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });       //Redirects to index.ejs
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About me' });    //Redirects to index.ejs
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'My projects' });  //Redirects to index.ejs
});

/* GET service page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services offered' }); //Redirects to index.ejs
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact me' });   //Redirects to contact.ejs
});

module.exports = router;
