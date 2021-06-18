const mongoose = require("mongoose");
var uri = "mongodb+srv://samdb:unicorn1@cluster0.idow2.mongodb.net/school";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
module.exports = {
  countries() {
    var countryschema = new mongoose.Schema({
      country_code: String,
      country_name: String
    //   myposts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'posts' }]
    },{
      versionKey: false
    });
    return mongoose.models.countries || mongoose.model("countries", countryschema);
  }
};