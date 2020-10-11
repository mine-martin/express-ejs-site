const express = require('express')

const router = express.Router();

//home
router.get('/', (req, res) => res.render('home'))

//work
router.get('/work', (req, res) => res.render('work'))

//about
router.get('/about', (req, res) => res.render('about'))

//contact
router.get('/contact', (req, res) => res.render('contact'))



module.exports = router;