const fs = require("fs");
const pdf = require("pdf-parse");

let dataBuffer = fs.readFileSync("invoice.pdf");

pdf(dataBuffer).then(function (data) {
  const text = data.text;
  // Now pass this text to the AI model
});
