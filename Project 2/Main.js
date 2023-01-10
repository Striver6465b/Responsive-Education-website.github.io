    // Toggle Menu JS

var navLinks = document.querySelector(".nav-links")

function showMenu() {
    navLinks.style.right = "0px";
    navLinks.style.width = "40%";
    navLinks.style.display = "block";
    navLinks.style.opacity = "1";

    document.querySelector(".img1").style.opacity = "0";


}
function hideMenu() {
    navLinks.style.right = "-40%";
    navLinks.style.width = "0%";
    navLinks.style.display = "none";
    navLinks.style.opacity = "0";

    document.querySelector(".img1").style.display = "inline";

    document.querySelector(".img1").style.opacity = "1";


}

// Navigation achor Points and View




document.querySelectorAll('a[href^="."]').forEach(anchor =>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getattribute("href")).scrollInToView({
            behaviour : "smooth"
        });
    });
});
