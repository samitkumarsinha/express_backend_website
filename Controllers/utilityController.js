var countrymodel = require("../Models/utilityModel");
module.exports = {
    countries(req, res) {
        countrymodel.countries().find({}, function (err, result) {
            if (!err) {
                if(result){
                    res.status(200).json(result);
                }else{
                    res.status(404).json({status: 'Not Found'})
                }
            }else{
                res.status(500).json({status: 'Internal Server Error'})
            }
        }).catch((error) => {})
    }
}