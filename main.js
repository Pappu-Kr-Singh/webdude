const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menu = document.querySelector(".nav_menu");

// open nav menu

menuBtn.addEventListener('click', ()=>{
    menu.style.display = 'block';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none'; 
} )

const closeNav = () =>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none'
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav)