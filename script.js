const menu = document.querySelector('.fa-bars');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', function(){
   nav.classList.toggle('slide');
});