const fs = require("fs");
var fileModule = require("./readFile");
var html = require("./generateHTML");
var path = require("path");
var body = "";

module.exports.readFolder = function (inputPath, cssLink, outputContainer) {
  fs.readdir(inputPath, function (err, files) {
    if (err) {
      return console.log(err);
    }

    var sortedFile = files.filter(file => path.extname(`${inputPath}/${file}`) === ".txt");
    sortedFile.forEach(function (file) {

      var fileName = fileModule.readFile(
        `${inputPath}/${file}`,
        cssLink,
        outputContainer
      );

      var url = `./${encodeURI(fileName)}.html`;

      // index.html body
      body += `<h3><a href=\"${url}\">${fileName}</h3>\n`;
    });

    // create index.html
    html.generateHTML(
      "index",
      cssLink,
      `<h2>Generated Sites</h2>\n${body}`,
      outputContainer
    );
  });
};
