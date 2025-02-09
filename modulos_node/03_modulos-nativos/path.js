const path = require("path");
const fs = require("fs");
console.log("Nome principal do arquivo ", path.basename(__filename));
console.log("Extension arquivo ", path.extname(__filename));

fs.writeFileSync(
  path.join(__dirname, "Mesg test"),
  "Welcome to jungle",
  () => {}
);
   