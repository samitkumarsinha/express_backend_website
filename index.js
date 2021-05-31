var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var cors = require('cors')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
var uri = 'mongodb+srv://samdb:unicorn1@cluster0.idow2.mongodb.net/school';
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
var userschema = new mongoose.Schema({
   username: String,
   password: String,
   email: String,
   role: String
}
);
mongoose.connection.on('connected', (err, res) => {
   console.log('connected successfully!!!');
})
app.get('/', (req, res) => {
    var users = mongoose.model('users', userschema);
    users.find({}, function(err, data){
        res.json(data)
    });    
})
var server = app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
