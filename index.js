//   ----------------------- Toggle the Navbar ----------------


const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const nav = document.querySelector("nav");  

//   Open menu

menuIcon.addEventListener("click", () => {
    nav.classList.add("active"); 
    menuIcon.style.display = "none";  
    closeIcon.style.display = "block"; 
});

//      Close menu  

closeIcon.addEventListener("click", () => {
    nav.classList.remove("active");  
    menuIcon.style.display = "block"; 
    closeIcon.style.display = "none";  
});



