var api = require('./Router/api');
var express = require('express')
var port = process.env.PORT || 3000;
var app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api)
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})