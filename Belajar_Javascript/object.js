// OBJECT
// Terdiri dari kumpulan beberapa properties yang memiliki value
const Person = {
    nama :'Adam',
    tanggal : 27-8-2003,
    umur : 20,
    domisili : 'Sidoarjo'
}
console.log(Person)
// Mengubah Object
console.log(Person.nama = 'Hawa')
console.log(Person['umur'] = 21)
// Menambah Object 
console.log(Person.gender = 'Perempuan')


// Object isa terdiri berbagai macam tipe data
const barang = {
    judul : 'Sepatu',
    Harga : 2000000,
    isReady : 'True',
    size : ['38','39','40','41'],
    location : {
        indonesia : 48,
        singapore : 52
    }
}
// Contoh Cara Memanggil Object
console.log(barang.judul)
console.log(barang['Harga'])
console.log(barang.size[1])
console.log(barang['is' + 'Ready'])
console.log(barang.location.indonesia)

const FormPendaftaran = {
    nama : prompt('Nama Anda'),
    asal : prompt('Asal Instansi'),
    email : prompt('Email Aktif'),
    nomor : prompt('Nomor Whatsapp Aktif'),
}
console.log(FormPendaftaran)

// Cara Memanggil Object Dalam Array
const shoppingCart =[
    {
        product : 'vue.js',
        price : 1.22,
        quantity : 3
    },
    {
        product : 'react.js',
        price : 2.32,
        quantity : 1
    },
    {
        product : 'react.js',
        price : 3.32,
        quantity : 2
    },
]
console.log(shoppingCart)
console.log(shoppingCart[0]) // manggil indeks 0
console.log(shoppingCart[0].product) //Vue.js
console.log(shoppingCart[0].price)
console.log(shoppingCart[0].quantity)
console.log(shoppingCart[0]['product'])
console.log(shoppingCart[0]['price'])
console.log(shoppingCart[0]['quantity'])

