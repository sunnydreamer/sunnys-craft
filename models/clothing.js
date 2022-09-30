const mongoose = require("mongoose");

const clothingSchema = new mongoose.Schema(
  {
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
    category: { type: String, default: "clothing" },
  },
  { timestamps: true }
);

const Clothing = mongoose.model("Clothing", clothingSchema);
module.exports = Clothing;
