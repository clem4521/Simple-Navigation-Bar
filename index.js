const Body = document.getElementById("body");
const Menu = document.getElementById("menu");
const Close = document.getElementById("close");
const Nav = document.getElementById("nav");
const NavLinks = document.getElementById("navLinks");

Menu.addEventListener("click",()=>{
    NavLinks.style.display = "block"
    Close.style.display = "block"
    Menu.style.display = "none"
    Nav.style.height = "100vh"
});
Close.addEventListener("click",()=>{
    Body.style.backgroundColor = "white";
    NavLinks.style.display = "none"
    Close.style.display = "none"
    Menu.style.display = "block"
    Nav.style.removeProperty('height')
});