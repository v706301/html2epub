const EPub = require("./lib");
const path = require("path");

const options = {
  title: "Sin of Mud",
  author: "Vittorio Adler",
  publisher: "html2epub",
  cover: path.resolve(__dirname, "./testData/cover.jpg") , // url or path
  version: 3,
  content: [
    {
      title: "Genesis",
      filename: path.resolve(__dirname, "./testData/00-beata.html")
    },
    {
      title: "Eden",
      filename: path.resolve(__dirname, "./testData/01-beata.html")
    },
    {
      title: "Sin of Mud",
      filename: path.resolve(__dirname, "./testData/02-beata.html")
    }
  ]
};
console.log(options)
new EPub(options, path.resolve(__dirname, "./sin-of-mud.epub")).promise.then(function() {
  return console.log(`${options.title} is generated successfully`);
});
