const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, './public/exercise.html'))
})
app.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, './public/stats.html'))
})
app.use(require("./routes"));
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});


app.listen(PORT, () => {
  console.log("Server listening on  http://localhost:" + PORT);
});
