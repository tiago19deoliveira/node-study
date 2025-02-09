const { error } = require("console");
const fs = require("fs");
const path = require("path");

//criando pasta
fs.mkdir(path.join(__dirname, "new-folder"), (error) => {
  console.log(error);
});

// criando arquivo na pasta
fs.writeFile(
  path.join(__dirname, "new-folder", "new-file.txt"),
  "Bem vindo ao fsc",
  (error) => {
    console.log("errozin", error);
  }
);

// fs.writeFile(path.join(__dirname, "03_modulos-nativos", "crypto.js"));

// adicionando contéudo ao arquivo
fs.appendFile(
  path.join(__dirname, "new-folder", "new-file.txt"),
  "Hello  my brother",
  (error) => {
    console.log(error);
  }
);

//ler arquivo

let contentFile = "oi";
fs.readFile(
  path.join(__dirname, "new-folder, new-file.txt"),
  "utf-8",
  (error, data) => {
    contentFile = data;
    console.log("Conteudo do data", data);
  }
);
