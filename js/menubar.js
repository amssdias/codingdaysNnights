const menuOptions = document.getElementById("navigation-bar__list");

document.getElementById("navigation-bar__icon").addEventListener("click", toggleMenuOptions)

// When clicking an item from the navigation bar
const menuLinks = document.querySelectorAll(".navigation-bar__list__item__link");
Array.from(menuLinks).forEach(function(menuOption) {
    menuOption.addEventListener("click", toggleMenuOptions)
})


function toggleMenuOptions() {
    if (menuOptions.style.display === "none" || !menuOptions.style.display) {
        menuOptions.style.display = "flex";
    } else {
        menuOptions.style.display = "none";
    }
}
