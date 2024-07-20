const form = document.querySelector('#form');
const input1 = document.querySelector('#input');
const list = document.querySelector('#notes');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const noteValue = input1.value;
    const newList = document.createElement('li');
    newList.innerText = noteValue;
    list.appendChild(newList); // Anda juga bisa menggunakan list.append(newList);
    input1.value = '';
});
// EVENT DELEGATION
list.addEventListener('click',(e) =>{
    // e.target.remove()
    e.target.nodeName === 'LI' && e.target.remove()
})
// const lis = document.querySelectorAll('li');
// for(let li of lis){
//     li.addEventListener('click',function(){
//         li.remove();
//     })
// }