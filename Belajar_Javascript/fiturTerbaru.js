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