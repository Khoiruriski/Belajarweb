const button = document.querySelector('button'); //Membuat variabel button agar bisa dimanipulasi
const h1 = document.querySelector('h1') //Membuat variabel h1 agar bisa dimanipulasi

button.addEventListener('click', () => {
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    console.log(newColor);
})

const generateRandomColor = () => {
    const r = Math.floor(Math.random()* 255);
    const g = Math.floor(Math.random()* 255);
    const b = Math.floor(Math.random()* 255);

    return `rgb(${r}, ${g}, ${b})`;
}
//Membuat kumpulan button dan memanipulasi element pada eventnya
const buttons = document.querySelectorAll('button')
for(let button of buttons){
    button.addEventListener ('click', () =>{
        button.style.backgroundColor = generateRandomColor()
        button.style.color = generateRandomColor()
    })
}

// //Membuat kumpulan heading dan memanipulasi element pada eventnya
// const headings = document.querySelectorAll('h1');4
// for( let h1 of headings){
//     h1.addEventListener('click', () => {
//         h1.style.backgroundColor = generateRandomColor();
//         h1.style.color = generateRandomColor();
//     })
// }

// Membuat kumpulan heading dan memanipulasi element dengan memanfaatkan keyword this pada event DOM agar lebih singkat

const headings = document.querySelectorAll('h1');

for (let heading of headings){
    heading.addEventListener('click', colorize); //tidak perlu mendefinisikan lagi tetapi memanggil langsung callback function colorize
}

function colorize(){
    // Memanfatkan keyword this untuk memanggil objek selama dalam ruang lingkup yang sama
    this.style.backgroundColor = generateRandomColor()
    this.style.color = generateRandomColor();
}