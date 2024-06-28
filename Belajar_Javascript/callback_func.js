// // FOR EACH
// // Digunakan untuk memanggil setiap element secara urut dengan tujuan tertentu, Contoh :

// // const variabel = [array,nya]

// // variabel.forEach(function(namaParameter){
// //     prosesnya
// // })

// const angka = [1,2,3,4,5,6,7,8,9,10]
// const angkaDouble = angka.map(function(num){
//     return num * 2;
// });

// angka.forEach(function(element){
//     if (element % 2 === 0 ){
//         console.log(element);
//     }
// })

// const animes = [
//     {
//         judul : 'Naruto',
//         rating : '84',
//     },
//     {
//         judul : 'Bleach',
//         rating : '82',
//     },
//     {
//         judul : 'Detective Conan',
//         rating : '85',
//     },
//     {
//         judul : 'William Morioarty',
//         rating : '99',
//     }
// ]

// animes.forEach(function(anime){
//     console.log(`Rating anime ${anime.judul} - ${anime.rating}/100`)
// }) // parameter 'Anime' berfungsi sebagai nama paramter yang mewakili satu persatu 

// const animeList = animes.map(function(listAnime){
//     return listAnime.judul.toUpperCase();
//     // console.log(`-${anime.judul}`)
// })



// // MAP (Membuat nilai array baru yang sudah dipetakan menggunakan map dan dimodifikasi melalui callback function dari suatu array)

// // Contoh program untuk memberikan ejaan besar pada kalimat dalam array 

// const expression = ['otw','lol','omg','wkwkwk','awowkwowk']
// const capsExpression = expression.map(function(exprsParameter){
//     return exprsParameter.toUpperCase();
// })
// console.log(expression);
// console.log(capsExpression);

// const angka1 = [1,2,3,4,5,6,7,8,9,10]
// const angkaDouble1 = angka.map(function(num){
//     return num * 2;
// });


// // ARROW FUNCTION (Memberikan nilai tanpa fungsi)

// // Perbandingan dengan function
// function perpangkatan1(x){
//     return x*x;
// }
// const hasil = perpangkatan1 (5); // memanggil dengan function

// // FUNCTION EXPRESSION

// const hasil2 = function (x){
//     return x * x;
// } //hasil2 ()

// // ARROW FUNCTION
// const perpangkatan = (x) => {
//     return x * x;
// }//tanpa perlu mengetikkan function
// perpangkatan(5); 

// const random = (x) => {
//     return Math.floor(Math.random() * 100);
// }//tanpa perlu mengetikkan function

// // IMPLICIT RETURN (tidak perlu menggunakan return untuk proses sederhana)

// const randomImplicitReturn = () => (
//     Math.floor(Math.random() * 1000) //tanpa return
// );

// const add =(a,b) => a + b;

// setTimeout & setInterva; (callback function yang bukan berasal dari array. Fungsinya untuk memberikan waktu jeda dan melakukan perulangan setiap waktu yang ditentukan)

// SETIMEOUT
// setTimeout(() => {
//     // Proses
// },3000) //Proses akan dieksekusi setelah 3 detik (JEDA)

// console.log('Halo...');

// setTimeout(()=> {
//     console.log('Apakah masih disana ?...');
// },3000);

// console.log('Saya Pergi ya..');

// // SET INTERVAL
// setInterval (() =>{
//     //Proses
// }),2000 //Akan melakukan proses secara (berulang) setiap 2 detik

// setInterval(()=>{
//     console.log (Math.random());
// }),2000 // akan memunculkan angka random selama 2 detik

// // UNTUK MEMBERHENTIKAN TINGGAL MEMBERI VARIABEL
// const interval = setInterval(()=>{
//     console.log(Math.random());
// },2000 )//akan memunculkan angka random selama 2 detik

// // KEMUDIAN Ketik 'clearInterval(interval)'

// FILTER (Untuk MEMBUAT ARRAY BARU DAN memfilter data dari array server sehingga sesuai dengan apa yang diinginkan)

// const angka =[1,2,3,4,5,6,7,8,9];
// const angkaGanjil = angka.filter((n) => {
//     return n % 2 === 1;
// }); //Menampilkan angka ganjil

const animes = [
    {
        judul : 'Naruto',
        rating : '84',
        year : 2003,
    },
    {
        judul : 'Bleach',
        rating : '82',
        year : 2007,
    },
    {
        judul : 'William Morioarty',
        rating : '99',
        year : 2020,
    },
    {
        judul : 'Detective Conan',
        rating : '86',
        year : 2012,
    },
]

// const namaVar = namaArray.filter((Identifier)=> Identifier.property > 95)

const animeBagus = animes.filter((anime) => anime.rating >= 85);

const animeCukupbagus = animes.filter((anime) => anime.rating < 85);

const animeBaru = animes.filter((anime) => anime.year > 2010);

const bestAnime = animes.reduce((bestAnime,currentAnime) =>{
    console.log(bestAnime,currentAnime);

    if(currentAnime.rating > bestAnime.rating) {
        return currentAnime;
    }
    return bestAnime;
})

const lowAnime = animes.reduce((lowAnime,currentAnime) =>{
    console.log(lowAnime,currentAnime);
    
    if(currentAnime.rating < lowAnime.rating) {
        return currentAnime;
    }
    return lowAnime;
})
// // Menggabungkan dengan MAP

// const judulAnimeBagus = animeBagus.map((anime) => anime.judul);

// // SOME & EVERY (Mengembalikan nilai Boolean untuk mengecek)

// // SOME (Mengecek apakah nilai apakah ada salah satu yang sesuai kondisi jika iya maka kembalinkan nilai TRUE)

// const kataKata = ['Aku','Dia','Kamu','Saya']
// const cekKataKata = kataKata.some(kata =>{
//     return kata.length === 4
// }); //True

// // EVERY (Mengecek apakah nilai apakah setiap nilai sesuai kondisi jika iya maka kembalinkan nilai TRUE)

// const kataganti = ['Aku','Dia','Kamu','Saya']
// const cekKataGanti = kataganti.every(kata =>{
//     return kata.length === 4
// }); //False

// const NilaiUjian = [80,95,76,78,80,99]
// const isGraduate = NilaiUjian.every((score) => score >= 75);

// const isAnimelistNew = animes.some((anime) => anime.year > 2010);

// //REDUCE (Melakukan proses berulang sebanyak element milik suatu array, nilai baliknya adaah single value)

const subtotal = [1500,20000,4000,19000,32000];

const total = subtotal.reduce((currentTotal,singleSubtotal) => {
    return currentTotal + singleSubtotal
}) //Terdapat 2 parameter (Awal,Terbaru)

// Contoh : 

const NilaiExam = [80,95,76,78,80,99]

let totalnilai = 0;
for (let score of NilaiExam){
    totalnilai += score;
}

const totalReduce = NilaiExam.reduce((total,score) => {
    return total + score;
});