// FUNCTION
// ADALAH POTONGAN KODE YANG MUNGKIN BISA KEMBALI

function namaFungsi(){
    //Lakukan Proses
}

namaFungsi()

function nyanyi(){
    console.log('Cek...');
    console.log('Do re mi..');
}

nyanyi()

// ARGUMENT DAN PARAMETER
function greet(name){
    console.log(`Hi, ${name}`)
}
greet('Adam') //PARAMETER SEBAGAI INPUTAN

function selamatPagi(name){
    console.log(`Halo ${name}. Selamat Pagi!`);
}

selamatPagi('Bang Adam')

// MULTIPLE PARAMETER
function jumlahkan (a,b){
    const jumlah = a + b
    console.log(jumlah)
}

jumlahkan(1,2)

// function jumlahkan (a = 2,b){
//     const jumlah = a + b
//     console.log(jumlah)
// }

// jumlahkan(0,2)

// RETURN (MENGEMBALIKAN NILAI)

function jumlahkan (a,b){
    const jumlah = a + b
    return jumlah;
    console.log('Jumlahkan') // Setelah Return tidak boleh ada proses lagi
}

jumlahkan(1,2)

function penjumlahan (a,b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        return false //Jika bukan number maka muncul nilai false
    }
    return a + b;
}

// CONTOH TANPA FUNCTION
// let lemparDadu = Math.floor(Math.random() + 6) + 1;
// console.log (lemparDadu)

// DENGAN FUNCTION
// function lemparDadu (){
//     console.log(Math.floor(Math.random() + 6) + 1);
// }

// SCOPE (VISIBILITAS VARIABEL)
let linux ='RedHat'

function easyLinux (){
    let linux = 'Debian'
    linux; //Debian
}
linux;//Redhat

// CONTOH
let language = 'Javascript' //SCOPE GLOBAL LEBIH TINGGI DERAJATNYA

function typeSafe(){
    // let language = 'Typescript'; //Scope LOKAL lebih rendah derajatnya
    console.log(language)
}
typeSafe() //Mengubah Nilai Yang telah dibuatkan
console.log(language); //Typescript (Karena Nilainya Sudah berubah)

// VAR (Fungsi untuk membuat variabel yang bisa dipanggil dimanapun baik dibuat dalam local scope atau global scope sekalipun)

let tinggi = 8;

if (tinggi > 5){
    var lebar = 10
}

console.log('Lebar', lebar)
// BLOCK SCOPE
for (let index = 0; index < 10; index ++){
    var lebar = index; //Dipanggil lagi di scope yang lain
    // console.log(index number);
}

console.log('Index : ', lebar)

// LEXICAL SCOPE (Bagaimana kita mengambil variabel dalam fungsi )

function funcLuar(){
    const nilaiLuar = 'Ini string nilai luar'

    function funcDalam(){
        let nilaiDalam = `Didalam mengambil ${nilaiLuar}`
        console.log(nilaiDalam)
    }
    funcDalam() // Harus didefinisikan untuk memanggil funcDalam
}


function lamarKerja(){
    const jabatan = 'Programmer';

    function orangDalam (){
        let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
        console.log(kenalan)
    }

    orangDalam()
}

// FUNCTION EXPRESSION (Memasukkan fungsi kedalam ekspresi variabel dan bisa juga dalam fungsi tersebut ditambahkan parametet)

const perpangkatan = function(nilai,pembanding){
    return nilai * pembanding;
}

perpangkatan(5) // langsung memanggil variabel karena didalamnya berisi fungsi

const pengurangan = function (nilai1,nilai2){
    return nilai1 - nilai2;
}
pengurangan(2-5);

// FUNCTION SEBAGAI ARGUMEN FUNCTION LAIN
// CONTOH

function duaKali (func){
    func()
    func()
}

function lemparDadu (){
    const hasil = Math.floor(Math.random() *  6) + 1;
        console.log(hasil)
} 

console.log(duaKali(lemparDadu)) // Dalam fungsi 2kali terdepat fungsi lempar dadu yang digunakan sebagai argumen untuk mempersingkat waktu

// METHOD (KETIKA MENAMBAKHAN FUNCTION PADA OBJECT PADA SUATU PROPERTY)

const aritmatika = {
    perkalian: function(x,y){
        return x * y;
    },// fungsi didalam property aritmatika
    pembagian : function(x,y){
        return x/y;
    },
    pangkat: function (x){
        return x*x ;
    }
}

// THIS (Keyword Untuk Memanggil property pada object yang sama)
// const saya ={
//     nama:'Adam',
//     hobi:'Membaca',
//     kenalan: function(){
//         return `Hi, Saya ${this.nama}. Hobi saya adalah ${this.hobi}.`
//     }
// }


//TRY AND CATCH DIGUNAKAN (KETIKA SALAH SATU FUNGSINYA ERROR MAKA DIA AKAN MASIH BISA MENCARI KODE YANG BERJALAN TANPA DIHENTIKAN TERLEBIH DAHULU)

function teriak(msg){
    try{
        console.log(msg.toUpperCase())
    } catch(error){
        console.log(error); //notif error
        console.log('Silahkan Masukkan tipe data string pada argumen teriak()') // pesan yang ditampilkan sebagai petunjuk
    }
}


try {
    saya.kenalan()
} catch{
    console.log('Error !!!')// Menangkap error
}

saya.kenalan();
console.log('Setelah Proses try and catch');