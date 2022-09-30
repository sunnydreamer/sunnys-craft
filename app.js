const express = require("express");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const mongoose = require("mongoose");

require("dotenv").config();

// import database
const Jewelry = require("./models/jewelry");
const Clothing = require("./models/clothing");
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
app.isAdmin = false;

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
    if (app.locals.isAdmin === true) {
      res.render("Index", { log: "true", isAdmin: "Admin" });
    } else {
      res.render("Index", { log: "true", isAdmin: "User" });
    }
  }
});

// Delete Route
app.get("/logout", (req, res) => {
  app.locals.login = false;
  app.locals.email = "";
  res.redirect("/");
});

app.get("/jewelry", (req, res) => {
  Jewelry.find({}, (err, allJewelry) => {
    // console.log(err);
    if (app.locals.login === false) {
      res.render("Products", { products: allJewelry, log: "false" });
    } else {
      if (app.locals.isAdmin === true) {
        res.render("Products", {
          products: allJewelry,
          log: "true",
          isAdmin: "Admin",
        });
      } else {
        res.render("Products", {
          products: allJewelry,
          log: "true",
          isAdmin: "User",
        });
      }
    }
  });
});

app.get("/clothing", (req, res) => {
  // Clothing.find({}, (err, allClothing) => {
  //   // console.log(err);
  //   res.render("Products", { products: allClothing });
  // });
  Clothing.find({}, (err, allClothing) => {
    // console.log(err);
    if (app.locals.login === false) {
      res.render("Products", { products: allClothing, log: "false" });
    } else {
      if (app.locals.isAdmin === true) {
        res.render("Products", {
          products: allClothing,
          log: "true",
          isAdmin: "Admin",
        });
      } else {
        res.render("Products", {
          products: allClothing,
          log: "true",
          isAdmin: "User",
        });
      }
    }
  });
});

// Products show page
app.get("/:catagory/:id", (req, res) => {
  switch (req.params.catagory) {
    case "jewelry":
      Jewelry.findById(req.params.id, (err, foundProduct) => {
        if (app.locals.login === false) {
          res.render("Show", { product: foundProduct, log: "false" });
        } else {
          if (app.locals.isAdmin === true) {
            res.render("Show", {
              product: foundProduct,
              log: "true",
              isAdmin: "Admin",
            });
          } else {
            res.render("Show", {
              product: foundProduct,
              log: "true",
              isAdmin: "User",
            });
          }
        }
      });

      break;
    case "clothing":
      Clothing.findById(req.params.id, (err, foundProduct) => {
        if (app.locals.login === false) {
          res.render("Show", { product: foundProduct, log: "false" });
        } else {
          if (app.locals.isAdmin === true) {
            res.render("Show", {
              product: foundProduct,
              log: "true",
              isAdmin: "Admin",
            });
          } else {
            res.render("Show", {
              product: foundProduct,
              log: "true",
              isAdmin: "User",
            });
          }
        }
      });

      break;
  }
});

// delete
app.delete("/:catagory/:id", (req, res) => {
  switch (req.params.catagory) {
    case "jewelry":
      Jewelry.findByIdAndRemove(req.params.id, (err, data) => {
        console.log(err);
        res.redirect(`/${req.params.catagory}`);
      });
      break;
    case "clothing":
      Clothing.findByIdAndRemove(req.params.id, (err, data) => {
        console.log(err);
        res.redirect(`/${req.params.catagory}`);
      });
      break;
  }
});

// edit

app.get("/:catagory/:id/edit", (req, res) => {
  switch (req.params.catagory) {
    case "jewelry":
      Jewelry.findById(req.params.id, (err, foundProduct) => {
        console.log(err);
        res.render("Edit", { isAdmin: "Admin", product: foundProduct });
      });
      break;
    case "clothing":
      Clothing.findByIdAndRemove(req.params.id, (err, data) => {
        console.log(err);
      });
      break;
  }
});

// put patch

app.put("/:catagory/:id/", (req, res) => {
  switch (req.params.catagory) {
    case "jewelry":
      Jewelry.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err, updatedProduct) => {
          console.log(updatedProduct);
          res.redirect(`/${req.params.catagory}/${req.params.id}`);
        }
      );

      break;
    case "clothing":
      Clothing.findByIdAndRemove(req.params.id, (err, data) => {
        console.log(err);
      });
      break;
  }
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
      app.locals.login = true;
      app.locals.email = foundData[0].email;
      app.locals.isAdmin = foundData[0].isAdmin;

      res.redirect("/");
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
  Jewelry.create([
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
  Clothing.create([
    {
      name: "baby girl romper",
      price: 38.99,
      seller: "LoveJax",
      img: "https://i.etsystatic.com/11390758/r/il/90e1c8/2606462290/il_794xN.2606462290_sx2i.jpg",
    },
    {
      name: "Fragkosiko Cotton Tote Bag ",
      price: 26.0,
      seller: "Egg Project",
      img: "https://i.etsystatic.com/12035891/r/il/f1099f/2306082656/il_794xN.2306082656_ga03.jpg",
    },
    {
      name: "Funny Cosmetic Make Up Bag",
      price: 19.75,
      seller: "JoyfulStore",
      img: "https://i.etsystatic.com/8533852/r/il/ab74ef/1162202616/il_794xN.1162202616_l69u.jpg",
    },
    {
      name: "Ghost Malone Shirt",
      price: 15.52,
      seller: "TEE",
      img: "https://i.etsystatic.com/34151806/r/il/87f58f/4165798026/il_794xN.4165798026_t9pj.jpg",
    },
  ]);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
