const fs = require("fs");
const path = require("path");
fs.mkdir(path.join(__dirname, "new-folder"), () => {});

fs.writeFile(
  path.join(__dirname, "new-folder", "new-file.txt"),
  "Bem vindo ao fsc",
  (error) => {
    console.log("errozin", error);
  }
);

fs.appendFile(path.join(__dirname, "new-folder", "new-file.txt"));
