let i = 1;
let n = 100;

console.log(" ");
console.log("KELIPATAN 3");
for (let i = 1; i <= n; i += 2) {
  if (i % 3 == 0) {
    console.log(i, "KELIPATAN", 3);
  }
}

console.log(" ");
console.log("KELIPATAN 6");
for (let i = 1; i <= n; i += 5) {
  if (i % 6 == 0) {
    console.log(i, "KELIPATAN", 6);
  }
}
console.log(" ");
console.log("KELIPATAN 10");
for (let i = 1; i <= n; i += 9) {
  if (i % 10 == 0) {
    console.log(i, "KELIPATAN", 10);
  }
}
