const express = require("express");
const multer = require("multer");
const dotenv = require("dotenv");
const invoiceRoutes = require("./routes/invoice.routes");

dotenv.config();
const app = express();
const port = 3000;

// File upload config
const upload = multer({ dest: "uploads/" });

// Routes
app.use("/api/invoice", upload.single("file"), invoiceRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
