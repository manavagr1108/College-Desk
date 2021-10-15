const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


var indexRouter = require('./routes/index');


app.get('/', indexRouter);
app.get('/convert',indexRouter);
// app.get('/convert/wordtopdf',(req,res) => {
//     res.render('wordtopdf')
// });

// app.post('/upload',(req, res) => {
//     console.log(req.body.upfile);
// })


app.listen(3030);