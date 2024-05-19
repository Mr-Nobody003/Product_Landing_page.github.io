window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > "800") {
        navbar.style.backgroundColor = " #000000";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
};
