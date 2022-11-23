const express = require("express");
const app = express();
const port = process.env.PROT;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
let plangusees = [];
app.get("/", (req, res) => {
  res.render("index", { pName: plangusees });
});
app.post("/", (req, res) => {
  const programing = req.body.planguse;
  plangusees.push(programing);
  res.redirect("/");
});

app.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
