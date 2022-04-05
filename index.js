var api = require('./Router/api');
var express = require('express')
var port = process.env.PORT || 3000;
var app = express();

var cors = require('cors');

var cookieparser = require('cookie-parser');
var session = require('express-session');
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));
app.use(cookieparser());
app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: false,
    cookie: {secure: false, maxAge: 10000}
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/uploads',express.static('uploads'))
app.use('/api', api);
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})