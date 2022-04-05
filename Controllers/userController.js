var usermodel = require("../Models/userModel");
var profilemodel = require("../Models/profileModel");
const jwt = require("jsonwebtoken");
const accessTokenSecret = "youraccesstokensecret";
module.exports = {
  login(req, res) {
    usermodel.users().exists(req.body, function (err, result) {
      if (!err) {
        if (result) {
          const accessToken = jwt.sign(req.body, accessTokenSecret);
          res.status(200).json({ accessToken });
        } else {
          res.status(404).json({ status: "Not Found" });
        }
      } else {
        res.status(500).json({ status: "Internal Server Error" });
      }
    });
  },
  register(req, res) {
    var user = usermodel.users();
    var profile = profilemodel.profile();
    var userobj = new user(req.body);
    userobj.save((err, result) => {
      if (!err) {
        if (result) {
          console.log('saved in user')
        } else {
          res.status(404).json({ status: "Not Found" });
        }
      } else {
        res.status(500).json({ status: "Internal Server Error" });
      }
    });
    var profileobj = new profile({"email" : req.body.email, });
    profileobj.save((err, result) => {
      if (!err) {
        if (result) {
          const accessToken = jwt.sign(req.body, accessTokenSecret);
          res.json({ accessToken });
        } else {
          res.status(404).json({ status: "Not Found" });
        }
      } else {
        res.status(500).json({ status: "Internal Server Error" });
      }
    });
  },
  users(req, res) {
    var users = usermodel.users();
    users.find({}, function (err, result) {
      if (!err) {
        res.status(200).json(result);
      } else {
        res.status(500).json({ status: "Internal Server Error" });
      }
    });
  },
  deluser(req, res) {
    var users = usermodel.users();
    users.deleteOne({_id: req.params.id}, function (err, result) {
      if (!err) {
        res.status(200).json(result);
      } else {
        res.status(500).json({ status: "Internal Server Error" });
      }
    });
  },
  profiles(req, res) {
    var profiles = profilemodel.profile();
    profiles.find({}, function (err, result) {
      if (!err) {
        res.status(200).json(result);
      } else {
        res.status(500).json({ status: "Internal Server Error" });
      }
    });
  },
  updateprofile(req, res) {
    var newfile = res.locals.fname;
    if(newfile) req.body.filename = newfile;
    var profile = profilemodel.profile();
    profile.findOneAndUpdate({"email": req.body.email},req.body,(err, result) => {
      if (!err) {
        if (result) {
          res.status(200).send({"status": "updated"})
        } else {
          res.status(404).json({ status: "Not Found" });
        }
      } else {
        res.status(500).json({ status: "Internal Server Error" });
      }
    });
  },
  updateuser(req, res) {
    var users = usermodel.users();
    users.findOneAndUpdate({"_id": req.body.id},req.body,(err, result) => {
      if (!err) {
        if (result) {
          res.status(200).send({"status": "updated"})
        } else {
          res.status(404).json({ status: "Not Found" });
        }
      } else {
        res.status(500).json({ status: "Internal Server Error" });
      }
    });
  },
  getprofile(req, res) {
    var users = usermodel.users();
    var resources = {
      email: req.params.id
    };
    users.aggregate(
      [
        {
          $match: resources, // use $match, $group etc or omit this block
        },
        {
          $lookup: {
            from: "profiles", // collection to join
            localField: "email", //field from the input documents
            foreignField: "email", //field from the documents of the "from" collection
            as: "profile", // output array field
          },
        },
      ],
      function (error, data) {
        res.status(200).json(data);
      });
  },
  getsess(req, res){
    console.log('**',req.session)
    res.send(req.session)
     
  }
};
