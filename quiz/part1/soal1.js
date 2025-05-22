let nama = "";
let peran = "";

if (nama == "") {
  console.log("nama wajib diisi");
} else if (peran == "") {
  console.log("pilih peranmu memulai game");
}

if (peran == "ksatria") {
  console.log(`halo ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if (peran == "tabib") {
  console.log(`halo tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran == "penyihir") {
  console.log(
    `halo penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`
  );
} else {
  console.log("kamu jadi bot aja ya");
}
