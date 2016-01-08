var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
var pickupRequestRoute = express.Router();
app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

pickupRequestRoute.route('/request')
    .get(function(req, res) {
        res.send('Under the request router.');
});

app.use('/request', pickupRequestRoute);

app.get('/', function (req, res) {
    res.render('index', {list: ['a', 'b', 'd']});
});

app.get('/books', function (req, res) {
    res.send('hello world to books');
});

app.listen(port, function (err) {
    console.log('I am listening on port ' + port);
});