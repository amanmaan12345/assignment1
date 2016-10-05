var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// get about me page

router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { title: 'About Me',
    heading: 'About' });
});

router.get('/projectsPage', function(req, res, next) {
  res.render('projectsPage', { title: 'Projects',
    heading: 'Some project and Acheivements' });
});

router.get('/contacttMe', function(req, res, next) {
  res.render('contactMe', { title: 'Projects',
    heading: 'Contact Information' });
});



module.exports = router;
