
let ul = document.getElementById('ul');

let menu = document.getElementById('menu').addEventListener('click',function(){
    ul.classList.toggle('showUl');
    this.classList.toggle('close');
})
 