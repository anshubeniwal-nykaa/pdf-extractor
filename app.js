const express = require("express");
const multer = require("multer");
const dotenv = require("dotenv");
const invoiceRoutes = require("./routes/invoice.routes");

dotenv.config();
const app = express();
const port = 3000;

// File upload config
const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("Welcome to the PDF Extraction API");
});

// Routes
app.use("/api/pdf", upload.single("file"), invoiceRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
