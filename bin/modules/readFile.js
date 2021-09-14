const fs = require("fs");
var html = require("./generateHTML");
var path = require("path");
var body = "";

module.exports.readFile = function (inputPath, cssLink, outputContainer) {
  try {
    const data = fs.readFileSync(inputPath, "utf8");
    body = data
      .split(/\r?\n\r?\n/)
      .map((para) => `<p>${para.replace(/\r?\n/, " ")}</p>\n\n`)
      .join(" ");
  } catch (err) {
    console.error(err);
  }

  var title = path.basename(inputPath, ".txt");

  html.generateHTML(title, cssLink, body, outputContainer);
  return title;
};
