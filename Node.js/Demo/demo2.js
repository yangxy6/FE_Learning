const fs = require("fs");
const testFill = require("loadsh-fill-test");

fs.writeFile("../log.txt", "hello node", (err, data) => {
  if (err) {
  } else {
    console.log("文件创建成功");
  }
});

const arr = testFill([1, 2]);
console.log(arr)
