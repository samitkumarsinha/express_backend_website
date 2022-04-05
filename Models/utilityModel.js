const mongoose = require("mongoose");
var uri = "";
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
