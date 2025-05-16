const { extractInvoiceData } = require("../services/invoice.service");
const { deleteFile } = require("../utils/file.helper");

exports.extractInvoice = async (req, res) => {
  try {
    const filePath = req.file.path;
    const result = await extractInvoiceData(filePath);
    deleteFile(filePath); // Clean up
    res.json({ success: true, data: result });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to extract invoice.",
        error: err.message,
      });
  }
};
