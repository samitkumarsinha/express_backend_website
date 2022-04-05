const mongoose = require("mongoose");
var uri = "";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false  });
module.exports = {
  profile() {
    var postschema = new mongoose.Schema({
      address: String,
      phone: String,
      country: String,
      email: String,
      filename: String,
      position: String
      // profile: {type:mongoose.Schema.Types.ObjectId, ref: 'users'  }
    },{
      versionKey: false
    });
    return mongoose.models.profiles || mongoose.model("profiles", postschema);
  }
};
