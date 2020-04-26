const express = require('express');
const verifyOAuth = require('../helpers').verifyOAuth;
const mongoose = require('mongoose');
const config = require('../config');
const Student = require('../models/Student'); 
const Class = require('../models/Class'); 

const Shop = mongoose.model('Shop');

const router = express.Router();
const students = [];

const getStudents = (req, res) => {
  let query = res.locals.query || {};
 
   Student.find(query, (e,result) => {
     if(e) {
       res.status(500).send(e);
       console.log(e.message);
     } else {
       students=result;
     }
   });
  };

/* GET home page. */
router.get('/', (req, res, next) => {
  const query = Object.keys(req.query).map((key) => `${key}=${req.query[key]}`).join('&');
  if (req.query.shop) {
    Shop.findOne({ shopify_domain: req.query.shop, isActive: true }, (err, shop) => {
      if (!shop) {
        return res.redirect(`/install/?${query}`);
      }
      
      if (verifyOAuth(req.query)) {
        return res.render('app/app', { apiKey: config.SHOPIFY_API_KEY, appName: config.APP_NAME, shop });
      }
      getStudents();
      return res.render('index', { students: students});
    });
  } else {
    return res.render('index', { students: students });
  }
});

router.get('/error', (req, res) => res.render('error', { message: 'Something went wrong!' }));

module.exports = router;
