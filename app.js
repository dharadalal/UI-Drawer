const drawrLeftBtn = document.querySelector('.drawer-left');
const sideNav = document.querySelector(".drawer-content");
const closeBtn = document.querySelector(".close-navbtn");
const drawer= document.querySelector(".drawer");

const navBackdrop = document.querySelector(".drawer-backdrop");

drawrLeftBtn.addEventListener('click',()=>{
    drawer.classList.remove("hide");
    sideNav.classList.add("show");
})

navBackdrop.addEventListener('click', closeDrawer);

closeBtn.addEventListener('click', closeDrawer);

function closeDrawer () {
    sideNav.classList.remove("show");
    drawer.classList.add("hide");
}