const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoice.controller");

router.post("/extract", invoiceController.extractInvoice);

module.exports = router;
