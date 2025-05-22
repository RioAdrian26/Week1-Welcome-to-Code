let input = 5;
let hasil = "";
for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    hasil = hasil + "*";
  }
  console.log(hasil);
  hasil = "";
}
