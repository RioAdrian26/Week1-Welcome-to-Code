function xo(str) {
  let ex = 0;
  let oh = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "x") {
      ex = ex + 1;
    } else if (str[i] == "o") {
      oh = oh + 1;
    }
    hasil = ex == oh;
  }

  return hasil;
}

console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
