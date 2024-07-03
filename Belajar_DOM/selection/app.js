// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
// 	// console.log(img.src);
// 	// img.src =
// 	// 	'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }

// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
// 	img.src =
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }

const links = document.querySelectorAll('a');

for (let link of links) {
	// link.innerText = 'Saya adalah link'
	link.style.color = 'rgb(0, 108, 134)'; //mengubah warna teks
	link.style.textDecorationColor = 'magenta'; //Mengubah style underline
	link.style.textDecorationStyle = 'wavy';
} //Memanipulasi keseluruhan elemen anchor dengan memanfaatkan looping
