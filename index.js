const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser');
const { ConnectToMongoDB } = require("./connect");
const {restrictToLoggedinUserOnly} = require('./middlewares/auth');
const app = express();
const PORT = 8002;

const URL = require("./models/url");

const urlRoute = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRoute =  require("./routes/user");

ConnectToMongoDB("mongodb://localhost:27017/urlShortener").then(() =>
  console.log("Mongodb connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/all_urls", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/", staticRouter);
app.use("/user", userRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId: shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  res.redirect(entry.redirectURL);
});
app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));


