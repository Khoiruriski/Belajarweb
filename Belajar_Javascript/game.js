// // GAME TEBAK TEBAKAN MENGGUNAKAN WHILE
// let maximum = parseInt(prompt('Masukkan Nilai Maksimal :')); // Memasukkan Batas maksimal Tebakan Nilai

// while(!maximum){
//     maximum = parseInt(prompt('Masukkan Nilai Maksimal!'));
// } // Jika 0 maka disuruh input lagi

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt('masukkan tebakan pertama kamu!'));
// let attempts = 1

// while (guess !== targetNum) {
//     attempts++;
//     if(guess > targetNum) {
//         guess = parseInt(prompt('Wah Terlalu tinggi! Tebak Lagi'));
//     }
//     // else if (guess = 'stop'){
//     //     break;
//     else {
//         guess = parseInt(prompt('Wah Terlalu rendah! Tebak Lagi'))
//     }
// }
alert = (`Selamat tebakan Anda Benar !!! Dengan percobaan ${attempts} kali`)

let maximum = parseInt(prompt("Masukkan nilai maksimal:"));
 
while (!maximum) {
  maximum = parseInt(prompt("Masukkan nilai maksimal!"));
}
 
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
 
let guess = parseInt(prompt("Isikan tebakan pertama kamu!"));
 
while (guess !== targetNum) {
  if (guess > targetNum) {
    guess = parseInt(prompt("Terlalu tinggi, tebak lagi:"));
  } else {
    guess = parseInt(prompt("Terlalu rendah, tebak lagi!"));
  }
}

alert("Selamat, jawaban anda benar!");