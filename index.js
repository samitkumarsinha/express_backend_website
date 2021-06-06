var express = require('express')
var port = process.env.PORT || 3000;
var app = express();
app.get('/', (req, res) => {
    res.send(`Running at port ${port}`)
})
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})