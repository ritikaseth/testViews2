var express = require('express');

var app = express();

app.set('view engine','pug');

app.get('/home',function (req, res) {

    var page = "home";
    if(req.query.page)
        page = req.query.page;

    res.render('home',
        {
            requestedPage: page
        });
    res.end();
});


app.listen(9000);