const PDFDocument = require("pdfkit");
const template = require("../resource/licenseTemplate");

module.exports = (app) => {
  app.post("/api/licensefile", (req, res) => {
    const doc = new PDFDocument();

    console.log(req.body);
    const { licenseeName, ownerName, musicName, composerName } = req.body;

    const dateObj = new Date();
    const day = ("0" + dateObj.getDate()).slice(-2);
    // current month
    const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    const year = dateObj.getFullYear();

    let filename = `license_file_${licenseeName}`;
    // Stripping special characters
    filename = encodeURIComponent(filename) + ".pdf";
    // Setting response to 'attachment' (download).
    // If you use 'inline' here it will automatically open the PDF
    res.setHeader(
      "Content-disposition",
      'attachment; filename="' + filename + '"'
    );
    res.setHeader("Content-type", "application/pdf");

    let content = template;

    content = content.replace("$owner_name", ownerName);
    content = content.replace("$owner_name", ownerName);
    content = content.replace("$month", month);
    content = content.replace("$day", day);
    content = content.replace("$year", year);
    content = content.replace("$licensee_name", licenseeName);
    content = content.replace("$licensee_name", licenseeName);
    content = content.replace("$music_name", musicName);
    content = content.replace("$composer_name", composerName);

    doc.y = 300;
    doc.text(content, 50, 50);
    doc.pipe(res);
    doc.end();
  });
};
