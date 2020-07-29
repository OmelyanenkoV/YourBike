const { Router } = require("express");
const Bicycle = require("../models/bicycle");
const router = Router();

router.get("/", (req, res) => {
  res.render("add", {
    title: "Добавить велосипед",
    isAdd: true,
  });
});

router.post("/", async (req, res) => {
  const bicycle = new Bicycle({
    title: req.body.title,
    price: req.body.price,
    img: req.body.img,
  });
  try {
    await bicycle.save();
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
