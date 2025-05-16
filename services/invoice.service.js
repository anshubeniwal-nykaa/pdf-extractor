const fs = require("fs");
const pdf = require("pdf-parse");
const { openai } = require("../config/openai");

exports.extractInvoiceData = async (filePath) => {
  const dataBuffer = fs.readFileSync(filePath);
  const pdfData = await pdf(dataBuffer);
  const text = pdfData.text;

  const prompt = `
Extract the following fields from the text:
- Invoice Number
- Invoice Date
- Invoice Amount

Text:
"""
${text}
"""

Respond in this JSON format:
{
  "invoice_number": "...",
  "invoice_date": "...",
  "invoice_amount": "..."
}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You extract structured invoice data from PDF text.",
      },
      { role: "user", content: prompt },
    ],
  });

  const content = response.choices[0].message.content;
  return JSON.parse(content);
};
