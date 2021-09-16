#!/usr/bin/env node

var pjson = require("../package.json");
var folder = require("./modules/readFolder");
var file = require("./modules/readFile");
var path = require("path");
const fs = require("fs");
const chalk = require("chalk");
var cssLink = "";

const argv = require("yargs")
  .usage("Usage: $0 --input <filename>  [-s <css-link>]")
  .option("i", {
    alias: "input",
    describe: ".txt file name",
    type: "array",
    demandOption: true,
  })
  .option("s", {
    alias: "stylesheet",
    describe: "css link",
    default: "",
    type: "string",
    demandOption: false,
  })
  // .option("o", {
  //   alias: "output",
  //   describe: "store output directory",
  //   type: "string",
  //   demandOption: false,
  // })
  .alias("v", "version")
  .version(pjson.name + " " + pjson.version)
  .alias("h", "help")
  .help().argv;

if (argv.stylesheet !== "") {
  cssLink = argv.stylesheet;
}

// delete output folder "dist" if it exists then create new one
const htmlContainer = "./dist";
if (!fs.existsSync(htmlContainer)) {
  fs.mkdirSync(htmlContainer);
} else {
  fs.rmdirSync(htmlContainer, { recursive: true }, (err) => {
    if (err) {
      throw err;
    }
  });

  fs.mkdirSync(htmlContainer);
  console.log(chalk.bold.green('dist folder is created successfully!'));
}

// check input path status
fs.stat(argv.input.join(" "), (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  if (stats.isDirectory()) {
    folder.readFolder(argv.input.join(" "), cssLink, htmlContainer);  // folder
  } else if (stats.isFile() && path.extname(argv.input.join(" ")) === ".txt") {
    file.readFile(argv.input.join(" "), cssLink, htmlContainer);      // file
  } else {
    console.log("Invalid file extension, it should be .txt");
  }
});
