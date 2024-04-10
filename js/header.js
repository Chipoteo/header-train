const menu_space = document.querySelector("#menu_spacee");
const ham_menu = document.querySelector("#ham_menu");
const cerrar = document.querySelector("#cerrar");


ham_menu.addEventListener("click", ()=>{
    menu_space.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    menu_space.classList.remove("visible");
})