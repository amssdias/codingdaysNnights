document.getElementById("navigation-bar__icon").addEventListener("click", function() {
    let menuOptions = document.getElementById("navigation-bar__list");

    if (menuOptions.style.display === "none") {
        menuOptions.style.display = "flex";
    } else {
        menuOptions.style.display = "none";
    }

})