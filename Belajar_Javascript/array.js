// // ARRAY
// let peserta = []
// // Kumpulan String
// let BelanjaUmma = ['Buah buahan', 'Sayur Mayur','Susu','Kacang-kacangan','Roti']
// // Kumpulan angka 
// let angka = [2,3,4,5,8,7]
// // Kumpulan Tipe Campuran
// let cintaku = ['Sholiha','Pasuruan',27,8,2004]
// // Mengubah Nilai Dalam Array
// cintaku[1] = 'Loing'
// console.log(cintaku)


// METHOD ARRAY DAN PUSH

// var.push() menambah dari belakang
// let barbelku = []
// barbelku.push(20)
// barbelku.push(15)
// barbelku.push(10)
// barbelku.push(5)
// barbelku.push(2)
// console.log(barbelku)

// // var.pop() menghapus dari depan
// barbelku.pop()
// barbelku.pop()
// barbelku.pop()
// barbelku.pop()

// // var.shift () menghapus dari depan
// let student = ['Bobby','Charlie','Denis','Adam']
// student.shift()
// student.shift()
// student.shift()
// console.log(student)

// // var.unshift() Menambah dari depan 
// student.unshift('Hana')
// student.unshift('Fajri')
// student.unshift('Rafi')


// METHOD-METHOD LAIN YANG DIMILIKI ARRAY
// var.concat() Menggabungkan 2 array atau lebih
const array1 = ['a','b','c','m','i'];
const array2 = ['d','e','f','d'];
const array3 = array1.concat(array2);
console.log(array3);

// var.includes() Mencari suatu nilai dalam array berbentuk boolean
console.log(array3.includes('d'));
console.log(array3.includes('d',2));
console.log(array3.includes('g')); 

// var.indexOf() Sama kaya string Includes
console.log(array3.indexOf('d'));
console.log(array3.indexOf('d',2));
console.log(array3.indexOf('g')); //Output -1 karena tidak ada

// var.sort() Mengurutkan nilai
array3.sort()
console.log(array3)

// var.join() Membuat suatu string dari sebuah array
console.log(array3.join('-'))
// var.reverse() Membalikkan urutan nilai pada array
console.log(array3.reverse())
// var.slice() Menyalin sebagian Nilai dari array
// var.splice() Menghapus atau mengubah element

// GUNAKAN FUNGSI VARIABEL CONST UNTUK TIPE DATA ARRAY

// NESTED ARRAY (ARRAY MULTIDIMENSI)
const board = [
    [null,null,'0']
    ['X','0',null]
    ['0',null,'X']
];
console.log(board);
board[0][2]