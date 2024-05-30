// menu script dtart

let menu =  document.querySelector('#menu_bar')
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
// light galerry satrr
lightGallery(document.querySelector('.gallery'))
//. gallery end

