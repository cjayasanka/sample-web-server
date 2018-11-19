const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
   res.render('home.hbs', {
       pagename: 'This is page name',
       pageno: 45
   });
});

app.listen(3000);