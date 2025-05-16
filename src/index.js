const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3005;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "OCR !!" });
});

app.listen(port, () => {
  console.log(`OCR application running on http://localhost:${port}`);
});
