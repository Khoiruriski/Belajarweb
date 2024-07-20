// DOM Adalah sebuah representasi dari struktur dokumen HTML yang digunakan untuk mengubah baik itu struktur,isi atau still dokumen melalui javascript.
// DOM Juga memiliki struktur hierarkis dimana setiap child node dari elemen lain atau root node

// 1. Melihat isi 

document // untuk melihat tag isi

console.dir(document) // untuk melihat keseluruhan object pada dokumen

document.all //menampilkan keseluruhan html collection dia dianggap sebagai kumpulan array

document.all(10) // memanggil index ke 10 dari html collection

document.all[10].innerText // menampilkan teks saja pada element index ke 10

document.all[10].innerHTML // menampilkan seluruh tag pada element index ke 10

document.all[11] // memanggil isi index ke 11

document.all[11].innerText = "bird" // Mengubah elemen teks yang ada didalam indeks ke 11 


// 2. SELECTING WITH DOM

// Memiliki 2 prosedur untuk memanipulasi DOM html
// Selecting & Manipulation

// A. getElementByid (Mengambil element dari id)

document //melihat isi dokumen dulu
document.getElementByid('banner') //mengambil id banner
const banner = document.getElementById('banner') // buat variabel untuk mempermudah melihat object
console.dir(banner) // lihat objectnya dengan seleksi yang sudah dibuay

// B. getElementByTagName (Mengambil element dari tag)

document //melihat isi dokumen dulu
document.getElementsByTagName('img') //mengambil element dari tag image menggunakan selector
const allImages = document.getElementsByTagName('img');
console.dir(allImages)
allImages[1].src 

for (let img of allImages){
    console.log(img.src);
}



// C. getElementByClassName (Mengambil element dari class 
document //melihat isi dokumen dulu
document.getElementsByClassName('square') // mengambil element dari dalam tag image yang memiliki nama class square
const squareImages = document.getElementsByClassName('square'); // membuat variabel untuk memudahkan proses manipulasi

for (let img of squareImages) {
	img.src =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
} //membuat contoh manipukasi dengan melakukan perulangan pada elemenyt yang memiliki class 'square' dengan gambar yang sama



// 3. SELEKSI MENGGUNAKAN QUERY SELCTOR (Lebih praktis bisa menseleksi apapun)

document.querySelector('h1') //Mencari elemen h1 pertama

document.querySelector('#red') //Mencari elemen pertama dengan id bernilai #red

document.querySelector('.big') //Mencari elemen pertama dengan class bernilai "big"

document.querySelectorAll('p a')

// NodeList(29) [a, a, a.mw-redirect, a, a, a, a, a, a, a, a, a, a.mw-redirect, a.mw-redirect, a, a, a, a, a, a, a.extiw, a, a.mw-redirect, a, a.mw-redirect, a, a, a, a.mw-redirect]

document.querySelector('input[type="checkbox"]') // mengambil dari element dari tag input yang memiliki atribut type checkbox

document.querySelector('div[lang="en"]') // mengambil dari element dari tag input yang memiliki atribut type checkbox



// 4.Inner Text, Text Content dan Innerhtml

document.querySelector('h1')
const para = document.querySelector('p')
para.innerText // Memgambil teks saja
para.textContent // Mengambil teks beserta indentasi dan spasinya
para.innerHTML // mengambil keseluruhan teks beserta semua tag dan indentasi didalamnya

// Mengubah isi teks sama seperti mengubah object cuman tidak bisa memberi tag atau atribut
para.innerText = 'Ini kita ubah isinya dengan teks ini'
// Mengubah Isi dengan tag 
para.innerHTML = 'Ini kita <b> ubah <b> paragrafnya dengan tag menggunakan innerHtml'



// 5. Mendapatkan Attribute yang dimiliki elemen HTML nya 

document.querySelector('#banner')

document.querySelector('#banner').attributes // menyeleksi atributnya saja

const baner = document.querySelector('#banner')

baner.alt = 'Gambar Kucing' //menambahkan isi pada alt

baner //Langsung melihat

baner.class = 'Isian-class'

baner.setAttribute('class', 'isian-class') //Menambahkan langsung mengubah atribut class pada elemen baner 

baner.getAttribute('class') //menambahkan atribut saja



// 6. Melakukan Styling dengan javascript DOM

const heading = document.querySelector('h1')

heading //mengecek

heading.style //Memanggil keseluruhan property style pada heading

heading.style.color //isinya akan tetap kosong karena hanya diubah dibagian dokumen css nya bukan di html jika ingin tampil maka gunakan inline style pada html



// 7. Memanfaatkan Classlist untuk Styling dengan DOM

const h1 = document.querySelector('h1')
h1 //Tampilkan 

h1.getAttribute('class') //mengecek apakah ada elemy class

h1.setAttribute('class','border-danger') //menambahkan class beserta isinya

h1 //cek

h1.setAttribute('class','bg-info') //coba tambahkan lagi

h1 // setelah di cek maka border dangernya ilang karena ketimpa class baru bg info

// Nah karena itu untuk menangani ini maka perlu adanya penyimpanan kedalam variabel

let currentValue = h1.getAttribute('class') //simpan kedalam variabel 

currentValue // cek

h1.setAttributeAttribute('class',`${currentValue} border-danger`) // sulit dan panjang maka manfaatkan classlist

h1.classList.add('border-danger') //tambahkan class tanpa harus menimpa

h1.classList.remove('text-white') //hilangkan atribur pada class yang bernama text white

h1.classList //cek isi class lagi dalam dokumen css nya

h1.classList.contains('bg-info') // cek apakah ada element itu dalam dokumen css nya kemudian maka dijawab dengan boolean true atau false


// 8. Menjelajahi element Parent, Child dan Sibling
// (Bagaimana cara kita mengakses element dalam element lagi)

const textBold = document.querySelector('b') //Buat selector varibel
textBold //check
textBold.parentElement //Mencari tau parent elemen dari element text bold
textBold.parentElement.parentElement //Mencari tau parent elemen kuadrat dari element text bold

const paragraf = textBold.parentElement //Menyimpan parent pada paragraf yg kita inginkan

paragraf

paragraf.children //mendapatkan keseluruhan children sehingga muncul html collection sehingga kita bisa memilih melalui index dengan syntax berikut

paragraf.children[6] //mengambiol dari html collection pada indeks 6

paragraf.children[6].childElementCount //menghitung

paragraf.children[6].children //menelusuri

// Membantu untuk membuat elemen baru yang bersebelahan sperti dropdown

const squareImg = document.querySelector('.square')
squareImg

squareImg.previousSibling //mencari nilai sebelumnya yang berdekatan 

squareImg.previousElementSibling //mencari element sebelumnya yang berdekatan

squareImg.nextSibling //mencari nilai setelahnya yang berdekatan

squareImg.nextElementSibling //mencari Elemen setelahnya yang berdekatan

// 9. Memahami Append dan Appendchild (Membuat elemen baru tanpa menuliskan dalam source code pada posisi yang kita inginkan)

document.createElement('img') //Membuat elemen img
const newImage = 
document.createElement('img') //menyimpan ke variabel untuk mempermudah

console.dir(newImage) //jika dilihat maka masih kosong

newImage.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F470988271699380%2F&psig=AOvVaw2cP_v8iZ__0OrFXopMsucD&ust=1720015681300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCJ9vLDiIcDFQAAAAAdAAAAABAE'

newImage //Cek apakah sudah berhasil ditambahkan ?

document.body.appendChild(newImage) //menambahkan objek yg sudah dibuat dan ditaruh dibawah sendiri pada element body secara default

newImage.classList.add('square')//menambahkan element pada class square

const paragraf1 = document.querySelector('p')
paragraf1.append('<b>cat</b>') //text akan muncul pada akhir paragraf p 

// Appendchild menambahkan pada objek terakhir sedangkan append saja menambah pada baris element terakhir pada isi element tersebut

const h2 = document.createElement('h2')

h2.append('This is about cat') //menambahkan value pada h2

const ha1 = document.querySelector('h1') //Membuat h1 menjadi objek 

ha1

ha1.insertAdjacentElement(position,element) //Menambahkan element pada area yang kita inginkan,contoh

ha1.insertAdjacentElement('afterand',h2) //Menambahkan element h2 setelah h1 dengan syntax afterand



// 10.Memahami remove dan Removechild (Menghapus suatu element)

// REMOVE CHILD (Kita haurs menseleksi element dulu kemudian panggil parentnya)

removeChild(child)

const firstLi = document.querySelector('li')

firstLi //cek

firstLi.parentElement //setelah itu panggil parent element nya
firstLi.parentElement.removeChild(firstLi) //setelah itu panggil lagi

// REMOVE (langsung hapus ke element)

remove()

// Contoh ingin menghapus gambar yang pertama

const img1 = document.querySelector('img')
img1
img1.remove() //Setelah dibuat variabelnya maka hapus saja 





// EVENT (Menindak lanjuti inputan atau perintah yang dilakukan oleh pengguna)
// Berfungsi untuk membuat website interaktif
