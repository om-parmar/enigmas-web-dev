const bar= document.querySelector('.bar');
const menu=document.querySelector('.menu');
bar.addEventListener('click',()=>{
    menu.classList.toggle('open');
});