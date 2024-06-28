// console.log('Halo...');

// setTimeout(()=> {
//     console.log('Apakah masih disana ?...');
// },3000);

// console.log('Saya Pergi ya..');

// // UNTUK MEMBERHENTIKAN TINGGAL MEMBERI VARIABEL
// const interval = setInterval(()=>{
//     console.log(Math.random());
// },2000 )//akan memunculkan angka random selama 2 detik

// FILTER (Untuk MEMBUAT ARRAY BARU DAN memfilter data dari array server sehingga sesuai dengan apa yang diinginkan)

const angka =[1,2,3,4,5,6,7,8,9];
const angkaGanjil = angka.filter((n) => {
    return n % 2 === 1;
}); //Menampilkan angka ganjil

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
        judul : 'Detective Conan',
        rating : '86',
        year : 2012,
    },
    {
        judul : 'William Morioarty',
        rating : '99',
        year : 2020,
    }
]

// const namaVar = namaArray.filter((Identifier)=> Identifier.property > 95)

const animeBagus = animes.filter((anime) => anime.rating >= 85);

const animeCukupbagus = animes.filter((anime) => anime.rating < 85);

const animeBaru = animes.filter((anime) => anime.year > 2010);

// Menggabungkan dengan MAP

const judulAnimeBagus = animeBagus.map((anime) => anime.judul);

const kataKata = ['Aku','Dia','Kamu','Saya']
const cekKataKata = kataKata.some(kata =>{
    return kata.length === 4
}); //True

// EVERY (Mengecek apakah nilai apakah setiap nilai sesuai kondisi jika iya maka kembalinkan nilai TRUE)

const kataganti = ['Aku','Dia','Kamu','Saya']
const cekKataGanti = kataganti.every(kata =>{
    return kata.length === 4
}); //False

const NilaiUjian = [80,95,76,78,80,99]

let totalnilai = 0;
for (let score of NilaiUjian){
    total += score;
}
const isGraduate = NilaiUjian.every((score) => score >= 75);//True

const isAnimelistNew = animes.some((anime) => anime.year > 2010);

//REDUCE (Melakukan proses berulang sebanyak element milik suatu array, nilai baliknya adaah single value)

const subtotal = [1500,20000,4000,19000,32000];

const total = subtotal.reduce((currentTotal,singleSubtotal) => {
    return currentTotal + singleSubtotal
}) //Terdapat 2 parameter (Awal,Terbaru)

const totalReduce = NilaiExam.reduce((total,score) => {
    return total
});