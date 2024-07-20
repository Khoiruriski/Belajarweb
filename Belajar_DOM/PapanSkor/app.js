const p1button = document.querySelector('#p1-button');
const p2button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const resetButton = document.querySelector('#reset');
const winPointOption = document.querySelector('#winpoint');

let p1Score = 0;
let p2Score = 0;
let batasMenang = 5;
let gameOver = false;

function reset(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;

}

p1button.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 1;
        if(p1Score === batasMenang){ 
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2button.addEventListener('click', function(){
    if (!gameOver){
        p2Score += 1;
        if(p2Score === batasMenang ){
            gameOver = true
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener ('click', reset);
// Event batasmenang
winPointOption.addEventListener('change', function(){
    batasMenang = parseInt(this.value);
    reset();
})