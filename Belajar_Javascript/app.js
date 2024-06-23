// // IF
// Mengecek Exc Sesuai Kondisi
// console.log("Sebelum Pembanding")
// Jika benar maka akan ditampilkan
// if(1+1 == 2) {
//     console.log("Betul sekali perhitungan anda")
// }
// console.log("Setelah Pembanding")


// Mengecek Angka
// let angka = Math.random()
// console.log(angka);

// if(angka >= 0.5){
//     console.log("Angka lebih dari 0.5")
// }
// if(angka <= 0.5){
//     console.log("Angka Kurang dari 0.5")
// }


// // Mengecek Hari
// const iniHari = "Sabtu";

// if(iniHari === "Senin"){
//     console.log("Selamat Bekerja Kawan!")
// }else if(iniHari === "Sabtu"){
//     console.log("Semoga jangan cepat  berlalu!")
// }


// // ELSE IF
// const nilai = '95';

// if(nilai < 50){
//     console.log('E');
// } else if (nilai < 60) {
//     console.log('D');
// } else if(nilai < 70) {
//     console.log('C');
// } else if(nilai < 80){
//     console.log('B');
// } else if (nilai < 100){
//     console.log('A');
// }


// //  ELSE 

// const bocilKesukaan = prompt('Isikan Bocil Kesukaanmu !').toLocaleLowerCase();

// if (bocilKesukaan === 'abe') {
//     console.log("Iii Gantengnya Oyy !")
// } else if (bocilKesukaan === 'ritsuki'){
//     console.log ("Iiii Jangan Jijik !")
// } else {
//     console.log ('Ga suka keduanya')
// }


// // PASSWORD NESTED IF
// const password = prompt("Buat Password Anda !");

// if(password.length>=6){
//     if(password.indexOf(' ') === -1 ){
//         console.log("Password Valid")
//     } else {
//         console.log("Password terdapat spasi silahkan coba lagi")
//     }
// } else {
// console.log("Password Invalid harus lebih dari 6 karakter");
// }


// OPERATOR LOGIC AND &&
// const password = prompt("Buat Password Anda harus  lebih dari 6 Karakter tanpa spasi !");
// if(password.length >= 6 && password.indexOf(' ') === -1){
//     console.log("Password Valid")
// } else {
//     console.log ("Password Tidak memenuhi syarat silahkan coba lagi !")
// }


// // OPERATOR LOGIC OR || 
// const role = prompt("Masukkan Role Akun");
// if(role === 'admin' || role === 'spv'){
//     console.log ("Akses Diberikan !")
// }else{
//     console.log("Akses Ditolak !")
// }


// // OPERATOR NOT
// const role = prompt("Masukkan Role Akun");
// if(role !== 'admin'){
//     console.log ("Akses Ditolak!")
// }else{
//     console.log("Akses Diberikan !")
// }


// SWITCH
// const Pasangan = prompt("Siapa Pasangan Bang Adam ?");
// switch(Pasangan){
//     case "Um um":
//         console.log("Iya betul itu pasangan bang adam !");
//         break;

//     case "Sholiha":
//         console.log("Betul Sekali itu pasangan bang adam !");
//         break;
    
//     case "Ummaku":
//         console.log("Betul Sekali itu pasangan bang adam !");
//         break;
    
//     case "Loing":
//         console.log("Betul Sekali itu pasangan bang adam !");
//         break;
//     default:
//         console.log("Bukan Pasangan Bang Adam !!!")
// } 