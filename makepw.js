const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const epic = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "|",
  "\\",
  ",",
  ".",
  "<",
  ">",
  "?",
  "/",
  "?",
  "`",
  "~",
];
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let result = "";
let length = 0;
const pw = () => {
  for (let a = 0; a < length; a++) {
    const q = Math.floor(Math.random() * 10);
    if (q < 3) {
      const num = Math.floor(Math.random() * 10);
      result += num;
    } else if (q < 6) {
      const al = Math.floor(Math.random() * alphabet.length);
      result += alphabet[al];
    } else if (q < 9) {
      const al = Math.floor(Math.random() * alphabet.length);
      result += alphabet[al].toLowerCase();
    } else {
      const al = Math.floor(Math.random() * epic.length);
      result += epic[al];
    }
  }
  console.log("");
  console.log("Password");
  console.log("-----------------------------------------------------");
  console.log("");
  console.log(result);
  console.log("");
  console.log("-----------------------------------------------------");
};

console.log("password length :");
rl.on("line", (line) => {
  // 한 줄씩 입력받은 후 실행할 코드
  // 입력된 값은 line에 저장된다.
  length = line;
  rl.close(); // 필수!! close가 없으면 입력을 무한히 받는다.
});
rl.on("close", () => {
  // 입력이 끝난 후 실행할 코드
  pw();
  process.exit();
});
