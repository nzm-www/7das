// 83
// let soz1 = prompt("brinchisoz");
// let soz2 = prompt("ikkinchisoz");
// function sozlarimiz(brinchisoz, ikkinchisoz) {
//   let natija = brinchisoz === ikkinchisoz;
//   return natija;
// }
// console.log(sozlarimiz(soz1, soz2));
// ============================================================
// 84
// function sozniSoni(harfNumber) {
//   let belgiSoni = 0;
//   for (const belgi of harfNumber) {
//     belgiSoni++;
//   }
//   return belgiSoni;
// }
// console.log(sozniSoni("nziomiddinabdu"));
// ============================================================
// 86
// function namuna(sonlar) {
//   let natijalar = sonlar.map((son) => son * 2);
//   return natijalar;
// }
// console.log(namuna([1, 86, -5]));
// ============================================================
// 87
// function wordLengths(sozlar) {
//   let uzunliklar = sozlar.map((soz) => soz.length);
//   return uzunliklar;
// }
// console.log(wordLengths(["assalamu", "alekum"]));
// ===========================================================
// 93
// function forExample(sonlar) {
//   const yigindi = sonlar.reduce((accumulator, current) => {
//     if (current > 5) {
//       return accumulator + current;
//     }
//     return accumulator;
//   }, 0);

//   return yigindi;
// }
// console.log(forExample([1, 5, 20, 30, 4, 9, 18]));
// ==========================================================
//73
// function hjim(box) {
//   let = { boyi, endi, uzunligi } = box;
//   let hajim = boyi * endi * uzunligi;
//   return hajim;
// }
// console.log(hjim({ boyi: 2, endi: 3, uzunligi: 5 }));
//74===========================================================
// function sonlar(kichik, kattason, arrson) {
//   let tanlanganSonlar = arrson.filter(
//     (son) => son >= kichik && son <= kattason
//   );
//   return tanlanganSonlar;
// }

// console.log(sonlar(3, 8, [1, 5, 95, 0, 4, 7]));
