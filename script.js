function displayNav() {
    const nav = document.getElementById("nav");
    const overlay = document.getElementById("overlay-element");
    const navIcon = document.getElementById("nav-icon");
    nav.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    if (overlay.classList.contains("hidden")) {
        navIcon.src = "./assets/images/icon-menu.svg";
        nav.style.display = "none";
        
    } else {
        navIcon.src = "./assets/images/icon-menu-close.svg";
        nav.style.display = "flex";
    }

   
    
}
