// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


const container = document.querySelector('#container'); //Membuat variabel container sebagai wadah untuk mmenampilkan elemen yang akan dibuat 
const baseImgURL =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'; //Membuat variabel url untuk memudahkan pemanggilan dan hanyan sampai pokemon/ agar bisa di loop

for (let i = 1; i <= 500; i++) {
	const pokeBall = document.createElement('div'); //Membuat elemen div dengan variabel pokeball sebagai pembungkus element pokemonnya
	pokeBall.classList.add('pokemon'); //Menambahkan class pokemon yang ada di css kedalam setiap variabel div pokeball 

	const imgPokemon = document.createElement('img'); // Membuat tag image dan elemen tag bernama image kedalam variabel untuk wadah gambar pokemonnya

	imgPokemon.src = `${baseImgURL}${i}.png`; // Nah dari image pokemonnya kita ubah dari source awal di variabel baseImgUrl dengan ditambahkan angka dari looping beserta extension png nya

	const label = document.createElement('span'); //Tambahkan label dengan membuat elemen baru dalam tag span

	label.innerText = `#${i}`; //Membuaat label text dengan inner text dengan #1 #2....

	pokeBall.appendChild(imgPokemon); //Nah setelah variabel image pokemonnya dibuat kita akan tambahkan kedalam div pokeball yang telah dibuat
	pokeBall.appendChild(label);
	container.appendChild(pokeBall); //Meletakkan div pokeball kedalam section container
}
