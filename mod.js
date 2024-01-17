const { readFile, writeFile } = require("fs").promises;
const http = require("http");
const util = require("util");

// const readFilePromise = util.promisify(readFile);

const start = async () => {
  const first = await readFile("emma.txt", "utf8");
  const second = await readFile("gab.txt", "utf8");
  await writeFile("heaven.txt", "ACEmmanuel has ascended");
  console.log(`${first}, ${second}`);
};

start();

// readFile("emma.txt", "utf8", (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data);
//   }
// });
