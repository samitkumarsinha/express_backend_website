var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var cors = require('cors')
app.use(cors());
const profiles = 
[
    {
        'name': 'ram',
        'roll' : 14
    },
    {
        'name': 'shyam',
        'roll' : 15
    }
];
app.get('/', (req, res) => {
    res.json(profiles)
})
var server = app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
