// DEFAULT VALUE (Digunakan ketika user lupa mengisi nilai parameter maka default value ini adalah mengantisipasi agar tetap berjalan)

function lemparDadu(sisi){
    return Math.floor(Math.random() * sisi) + 1;
}

function lemparDadu(sisi = 6){
    return Math.floor(Math.random() * sisi) + 1;
}

function sapa(nama,pesan){
    console.log(`Halo ${nama},${pesan}`);
}

function sapa(nama = 'User',pesan = 'Selamat Bekerja'){
    console.log(`Halo ${nama},${pesan}`);
}

// SPREAD OPERATOR FUNCTION (...var)

const angka = [1,2,3,4,5]
angka.push(0);
Math.max(angka); //NaN
console.log(Math.max(...angka)); // 5
console.log(Math.min(...angka)); // 1
// Isinya sama seperti
// Math.max(1,2,3,4,5)


// MERGE ARRAY (Menggabungkan Array) ([...var1,...var2])
const nama = ['Adam','Hawa','Joseph','Stanley','gerard','Asep'];
const campuran = [...angka, 0, ...nama];
console.log(campuran)

// MERGE OBJECT (Menggabungkan object) ({...var,properties,properties1.})

const user = {
    name : 'User',
    email : 'user@gmail.com',
    role : 'Admin'
}

const credential = {
    pass : 'password',
    token : 'ukqyg8nt'
}

const useBaru = {...user,role: 'Admin',id : 123, passwor :'password'}; //menambahkan properties dalam object
const userBaru = {...user, ... credential}; //gabungkan object

// REST PARAM (Males ketik parameter yang panjang,pake ini)

function sumAll (...nums){
    let total = 0
    for (let n of nums) total += n
    return total
}

const tambahSemua = (...nums) => {
    return nums.reduce((total,element) => total + element);
}; //Takterbatas memiliki parameter yang dinamis

console.log(tambahSemua(1,2,3,4,5,6))

const pemenang = (gold,silver,bronze, ...sisa) => {
    console.log (`Medali emas diraih oleh ${gold}`);
    console.log (`Medali silver diraih oleh ${silver}`);
    console.log (`Medali bronze diraih oleh ${bronze}`);
    console.log(`Peserta lainnya ${sisa}`)
}

console.log (pemenang(...nama))

// DESTRUCTING ARRAY DENGAN SPREAD OPERATOR (Unboxing versi array dan object)

const peserta = ['Batman','Ironman','Superman','Antman','Captain Amerika']

const [satu,dua,tiga,...any] = peserta;

// Satu : Batman
// Dua : Superman
// Tiga : Antman
// Any : Antman,captain amerika


// DESTRUCTING ARRAY DENGAN SPREAD OPERATOR (Unboxing versi array dan object)
// const {property} = var

const {name : namaUser,email, phone = '089515858938'} = user;

// Tidak perlu menggunakan user.name atau user.email
// namaUser :'Adam'


// DESTRUCTING Function DENGAN SPREAD OPERATOR (Unboxing versi array dan object)
// const var = ({parameter} => {return proses})
// var(sumberVar)

const user1 = {
    name : 'User',
    email : 'user@gmail.com',
    role : 'Admin'
}

const userAndRole = ({name,role}) => {
    return `${name} - ${role}`
}

userAndRole(user1)

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

// const anime = animes.map((anime) => {
//     return `${anime.judul} (${anime.year}) rating ${anime.rating} `
// });//membongkar function

const anime = animes.map((judul,year,rating) => {
    return `${judul} (${year}) rating ${rating} `
});//membongkar function dalam parameter
