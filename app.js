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

const { writeFileSync } = require("fs");

for (let i = 0; i < 1000; i++) {
  writeFileSync("heaven.txt", `ACE is a god level programmer #${i}\n`, {
    flag: "a",
  });
}

