const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();
const homeRoutes = require("./routes/home");
const cardRoutes = require("./routes/card");
const addRoutes = require("./routes/add");
const bicyclesRoutes = require("./routes/bicycles");

// registration and setup handlebars
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

// registration public
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", homeRoutes);
app.use("/add", addRoutes);
app.use("/bicycles", bicyclesRoutes);
app.use("/card", cardRoutes);
const PORT = process.env.PORT || 3000;

(async function () {
  try {
    const url =
      "mongodb+srv://vlad:mmUlgOsytXbrOT4V@cluster0.xnxm4.mongodb.net/<dbname>?retryWrites=true&w=majority";
    await mongoose.connect(url, { useNewUrlParser: true });
    app.listen(PORT, () => {
      console.log(`Server is working... on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
})();
