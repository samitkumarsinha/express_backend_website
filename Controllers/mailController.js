module.exports = {
    sendMail(req, res){
        console.log(req.body)
        res.send(req.body)
    }
}