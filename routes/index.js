/*
* File name: index.js
* Author Name: Amanjot Singh
* Description: this javascript file controls thelinks of the website
* **/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// get about me page

router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { title: 'About Me',
    heading: 'About Me' });
});
//get project page
router.get('/projectsPage', function(req, res, next) {
  res.render('projectsPage', { title: 'Projects',
    heading: 'Some project and Acheivements' });
});
//get contact me page
router.get('/contactMe', function(req, res, next) {
  res.render('contactMe', { title: 'Contact Me',
    heading: 'Contact Information' });
});
//get services page
router.get('/servicesPage', function(req, res, next) {
  res.render('servicesPage', { title: 'Services',
    heading: 'Services offered' });
});


module.exports = router;
