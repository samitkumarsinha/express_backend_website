const mongoose = require("mongoose");
var uri = "mongodb+srv://samdb:unicorn1@cluster0.idow2.mongodb.net/school";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
module.exports = {
  users() {
    var userschema = new mongoose.Schema({
      username: String,
      password: String,
      email: String,
      role: String
    //   myposts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'posts' }]
    },{
      versionKey: false
    });
    return mongoose.models.users || mongoose.model("users", userschema);
  }
};