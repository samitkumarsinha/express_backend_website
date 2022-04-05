const mongoose = require("mongoose");
var uri = "";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
module.exports = {
  users() {
    var userschema = new mongoose.Schema({
      username: String,
      password: String,
      role: String,
      email: String,
      // profile: [{type:mongoose.Schema.Types.ObjectId, ref: 'profiles'  }]
    },{
      versionKey: false
    });
    return mongoose.models.users || mongoose.model("users", userschema);
  }
};
