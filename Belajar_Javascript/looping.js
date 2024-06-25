// PERULANGAN
// TIPE-TIPE PERULANGAN

// // FOR
// for(let i = 1; i <=10; i++ ){
//     console.log("Saya Ada Di Dalam Loop")
//     console.log(i);
// }
// for(let i = 0; i <=20; i+=2 ){
//     console.log(i);
// }
// // (-)
// for(let i = 20; i >=0; i-- ){
//     console.log(i);
// }
// // (*)
// for(let i = 10; i <=1000; i*=10 ){
//     console.log(i);
// }

// for(let i = 10; i <=100; i**1 ){
//     console.log(i);
// }

// PERULANGAN ARRAY
// const animals =['Kucing','Rusa','kambing','Sapi'];

// for(let i = 0; i < animals.length; i++){
//     // console.log(i);
//     console.log(i,animals[i]);
// }

// // NESTED LOOP FOR
// const pilihan = 'abcd';
// for (let Soal = 1; Soal<=10; Soal++){
//     console.log(`${Soal}. Soal Nomor ${Soal}:`);
//     for (let Jawaban = 0; Jawaban < pilihan.length; Jawaban++ ){
//         console.log(`${pilihan[Jawaban]}. Pilihan Jawaban`)
//     }
// };

// // MENDAPATKAN DATA DARI NESTED LOOP
// const studentRow = [
//     ['Adam','Hawa','Meakhel','Noah'],
//     ['Abraham','Abe','Ritsuki','Torao'],
//     ['Luffy','Nami','Usopp','Zoro'],
// ];

// for (let i = 0; i < studentRow.length; i++){
//     const row = studentRow [i];
//     console.log(`Seat Row #${i + 1}`);
//     for(let k = 0; k < row.length; k++); {
//         console.log(`   ${row[k]}`);
//     }
// }
    
// // WHILE (Akan Terus Berjalan Selama True)
// let num = 0 ;
// while(num < 10){
//     console.log(num);
//     num++;
// }

// for(let num = 0; num < 10; num++){
//     console.log(num)
// }
// // Contoh Penggunaan Password
// const password = 'Pass123'

// let login = prompt('Masukkan Sandi :')
// while(login !== password){
//     login = prompt('Sandi Salah Masukkan Sandi Kembali')
// }
// alert('Selamat Datang Sandi Anda Benar !')

// WHILE (BREAK)
// let input = prompt("Siapa Pemenang Duta Fatayat Pasuruan ?")

// while(true){
//     input = prompt(input);
//     if(input.toLowerCase() === 'sholiha'){
//         alert("Betul tuan, Itu Istri anda");break;
//     } 
// }

// for (let i = 0; i < 100; i++){
//     console.log(i);
//     if (i == 50) break;
// };

// FOR..OF (Digunakan Untuk Array)
// for (variable of iterable){
//     statement
// }

// const buahs = ['Pisang','Apel','Jeruk','Mangga']
// for(let i = 0; i < buahs.length; i++){
//     console.log(`Buah ${buahs[i]}`);
// }

// for (let buah of buahs){
//     console.log(buah);
// }

// const studentRow = [
//     ['Adam','Hawa','Meakhel','Noah'],
//     ['Abraham','Abe','Ritsuki','Torao'],
//     ['Luffy','Nami','Usopp','Zoro'],
// ];
// for (let row of studentRow){
//     for(let student of row){
//         console.log(student);
//     }
// }
// FOR..IN (Digunakan Untuk Object)

const studentScore = {
    olivia : 20,
    adam : 100,
    hawa : 99,
    luffy : 50,
};

for (let student in studentScore){
    console.log(`Student ${student} memiliki nilai ${studentScore[student]}`); //hanya menampilkan nama
}

let total = 0;
let scores = Object.values(studentScore)
for(let score of scores){
    total+=score;
}
console.log(total/scores.length);

const FormPendaftaran = {
    nama : prompt("Masukan Nama Anda"),
    kelas : prompt('Masukan Kelas Anda'),
    univ : prompt('Masukkan Universitas'),
}
console.log(FormPendaftaran)
