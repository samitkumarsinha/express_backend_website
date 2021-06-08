var usermodel = require("../Models/userModel");
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';
module.exports = {
    login(req, res) {
        usermodel.users().exists(req.body, function (err, result) {
            if (!err) {
                if(result){
                    const accessToken = jwt.sign(req.body, accessTokenSecret);
                    res.json({accessToken});
                }else{
                    res.status(404).json({status: 'Not Found'})
                }
            }else{
                res.status(500).json({status: 'Internal Server Error'})
            }
        });
    },
    register(req, res){
        var user = usermodel.users();
        var userobj = new user(req.body);
        userobj.save((err, result) => {
            if (!err) {
                if(result){
                    const accessToken = jwt.sign(req.body, accessTokenSecret);
                    res.json({accessToken});
                }else{
                    res.status(404).json({status: 'Not Found'})
                }
            }else{
                res.status(500).json({status: 'Internal Server Error'})
            }
        })
    }
}