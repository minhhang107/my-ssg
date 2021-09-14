const fs = require("fs");
var fileModule = require("./readFile");
var html = require("./generateHTML");
var body = "";

module.exports.readFolder = function (path, cssLink, outputContainer) {
  fs.readdir(path, function (err, files) {
    if (err) {
      return console.log(err);
    }

    files.forEach(function (file) {
      var fileName = fileModule.readFile(
        `${path}/${file}`,
        cssLink,
        outputContainer
      );

      // index.html body
      body += `<h5><a href={${path}/${encodeURI(
        fileName
      )}.html}>${fileName}</h5>\n`;
    });

    // create index.html
    html.generateHTML(
      "index",
      cssLink,
      `<h4>Generated Sites</h4>\n${body}`,
      outputContainer
    );
  });
};
