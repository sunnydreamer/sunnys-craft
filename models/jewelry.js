const mongoose = require("mongoose");

const jewerySchema = new mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
  seller: { type: String, require: true },
  rating: { type: Number, default: 0 },
  img: {
    type: String,
    require: true,
    default:
      "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png",
  },
  description: { type: String, require: true },
  //   Comments: { type: [], default:  },
});

const Jewery = mongoose.model("Jewery", jewerySchema);
module.exports = Jewery;
