const express = require('express');
const router = express.Router();


router.get('/',(req, res) => {
    res.render('index')
})
router.get('/convert/wordtopdf',(req, res) => {
    console.log("wordtopdf");
    res.render('wordtopdf')
})
router.get('/wordtopdf',(req, res) => {
    console.log("wordtopdf");
    res.render('wordtopdf')
})

router.post('/upload',(req, res) => {
    res.send('uploads')
})

module.exports = router;