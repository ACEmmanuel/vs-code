/* 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, {threshold: 0.5});
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el)); */

/* {
  "editor.defaultFormatter": "<another formatter>",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
 */

/* const {readFile} = require ('fs');
const emma = require ('http')

const read = readFile("emma.txt", "utf8", (error, text) => {
  if (error) throw error;
  console.log("The file contains:", text);
  });

console.log(read)
 */

let fs = require("fs");
let http = require("http");

// const read = createReadStream("heaven.txt", {
//   highWaterMark: 9000,
//    encoding: "utf8",
// });

// read.on("data", (result) => {
//   console.log(result);
// });

http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream("heaven.txt", "utf8");

    fileStream.on("open", () => {
      fileStream.pipe(res);
    });

    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000, () => {
    console.log("open now");
  });
