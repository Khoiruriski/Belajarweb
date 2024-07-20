// const button = document.querySelector('#clickme');

// // Memanfaatkan properti DOM dalam dokumen javascript
// button.onclick = function(){
//     console.log('You clicked me');
// };

// // button.onmouseover = function (){
// //     console.log('Don t touch me')
// // }

// const scream = () => {
//     console.log ('Dont touch me !');
// };

// button.onmouseover = scream;

// const eventbtn = document.querySelector('#eventbtn');
// // Event addEventListener digunakan apabila ingin memasukan 2 function atau lebih dalam satu 

// // eventbtn.addEventListener('click',function(){
// //     alert('clicked');
// // })
// eventbtn.addEventListener('click',stepSatu);
// eventbtn.addEventListener('click',stepDua);

// function stepSatu (){
//     console.log('Step satu')
// }
// function stepDua (){
//     console.log('Step dua')
// }

// // Menggunakan Event (addEventListener) untuk membaca intputan keyboard dan menampilkan objeknya serta cara memanfaatkan callback untuk memanipulasi hasilnya

// // Membuat button untuk mendapatkan isi dari objek click 
// const buttonKeyboardEvent = document.querySelector('#keyboardEvent').addEventListener('click',(e)=> {
//     console.log(e);
// })

// // Membuat input untuk mendapatkan isi dari objek click 
// // Keydown bekerja ketika ada inputan apapun
// const input = document.querySelector('input');
// input.addEventListener('keydown',(e) => {
//     // console.log(e)//menampilkan isi objectnya
//     // console.log(e.key);//menampilkan key
//     console.log(e.code);//menampilkan keyidentifier atau keycode

//     // Membuat proses dengan inputan tertentu dengan memanfaatkan parameter dan keycode nya dalam inputan
//     switch(e.code){
//         case 'ArrowUp':
//             console.log('Tombol Arah Atas');
//             break;
//         case 'ArrowDown':
//             console.log('Tombol Arah Bawah');
//             break;
//         case 'ArrowLeft':
//             console.log('Tombol Arah Kanan');
//             break;
//         case 'ArrowRight':
//             console.log('Tombol Arah Kiri');
//             break;
//             default:
//                 console.log('Diabaikan')
//     }
//     // console.log('Tombol ditekan')
// })
// // Keyup bekerja ketika tombolnya dilepas
// input.addEventListener('keyup',() => {
//     // console.log('Tombol dilepas')
// })

// // PREVENTDEFAULT
// const form = document.querySelector('#form')
// // form.addEventListener('submit', function(e){
// //     e.preventDefault(); //Mencegah untuk mengarah ke halaman defaultnya
// //     console.log('Submitted Form')
// // });

// document.querySelector('a').addEventListener('click', (e) => {
//     e.preventDefault(); //Mencegah untuk mengarah ke halaman defaultnya
//     console.log('harusnya ke google');
// })

// MEMBUAT NOTES MENGGUNAKAN PREVENT DEFAULT
const form = document.querySelector('#form')
const input1 = document.querySelector('#input');
const list = document.querySelector('#notes');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const noteValue = input1.value;
    const newList = document.createElement('li');
    newList.innerText = noteValue;
    list.append(newList)
    input1.value = '';
})

const buttonChangeColor = document.querySelector('#changeColor');
const container = document.querySelector('#container');

buttonChangeColor.addEventListener('click', function(e){
    container.style.backgroundColor = generateRandomColor();
    e.stopPropagation();//Memanfaatkan parameter untuk memberhentikan proses selanjutnya untuk mengatasi event bubbling
});

container.addEventListener('click', function(){
    container.classList.toggle('hide');
});

const generateRandomColor = () => {
    const r = Math.floor(Math.random()* 255);
    const g = Math.floor(Math.random()* 255);
    const b = Math.floor(Math.random()* 255);

    return `rgb(${r}, ${g}, ${b})`;
}
