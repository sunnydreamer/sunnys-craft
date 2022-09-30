const express = require("express");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

const methodOverride = require("method-override");

const mongoose = require("mongoose");

require("dotenv").config();

// import database
const Jewery = require("./models/jewelry");
const User = require("./models/user");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// set up app local
app.locals.login = false;
app.locals.email = "";

// middle ware

app.use((req, res, next) => {
  // console.log(app.locals.login);
  // console.log(app.locals.email);
  next();
});

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

// ==================================Routes==================================================

// Home Page
app.get("/", (req, res) => {
  console.log(app.locals.login);
  if (app.locals.login === false) {
    res.render("Index", { log: "false" });
  } else {
    res.render("Index", { log: "true" });
  }
});

// Delete Route
app.get("/logout", (req, res) => {
  app.locals.login = false;
  app.locals.email = "";
  res.redirect("/");
});

app.get("/jewery&accessories", (req, res) => {
  Jewery.find({}, (err, allJewery) => {
    // console.log(err);
    res.render("Products", { jewery: allJewery });
  });
});

app.get("/clothing&shoes", (req, res) => {
  res.render("Products");
});

//===================================================== User Routes============================================

app.post("/user/create", (req, res) => {
  User.create(req.body, (err, createdUser) => {
    // console.log(err);
    console.log("Just added: ", createdUser);
  });
  res.redirect("/");
});

//log in Routes
app.post("/user/login", (req, res) => {
  User.aggregate(
    [
      {
        $match: {
          $and: [{ email: req.body.email }, { password: req.body.password }],
        },
      },
    ],
    (err, foundData) => {
      // console.log(foundData[0].email);
      app.locals.login = true;
      app.locals.email = foundData[0].email;
      res.redirect(`/`);
    }
  );

  // console.log(found);
  // if (found) {
  //   console.log("found");
  // } else {
  //   console.log("not found");
  // }
});

app.use((req, res, next) => {
  console.log(app.locals.login);
  console.log(app.locals.email);
  next();
});

app.get("/seed", (req, res) => {
  Jewery.create([
    {
      name: "Wide Stainless Steel Chain",
      price: 15.99,
      seller: "Temp Design",
      img: "https://i.etsystatic.com/28894968/r/il/87899c/3043525739/il_340x270.3043525739_ofu3.jpg",
    },
    {
      name: "Gold Halloween Bat Necklace",
      price: 26.6,
      seller: "Golden Jewelry",
      img: "https://i.etsystatic.com/35342882/c/1526/1213/267/698/il/16843f/4188943789/il_340x270.4188943789_dm73.jpg",
    },
    {
      name: "African Turquoise Bracelet",
      price: 15.9,
      seller: "EvelynCreationsStore",
      img: "https://i.etsystatic.com/22494995/r/il/108e7b/4227965637/il_340x270.4227965637_km22.jpg",
    },
    {
      name: "Women's Dopp Kit",
      price: 34.9,
      seller: "LeatherPage",
      img: "https://i.etsystatic.com/22295846/r/il/24cc02/2359697365/il_794xN.2359697365_kksq.jpg",
    },
  ]);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
