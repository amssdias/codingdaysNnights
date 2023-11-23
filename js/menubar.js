const menuOptions = document.getElementById("navigation-bar__list");

document.getElementById("navigation-bar__icon").addEventListener("click", toggleMenuOptions)

// When clicking an item from the navigation bar
const menuLinks = document.querySelectorAll(".navigation-bar__list__item__link");
Array.from(menuLinks).forEach(function(menuOption) {
    menuOption.addEventListener("click", toggleMenuOptions);
    menuOption.addEventListener("click", reduceScroll);
})


// When clicking an option from the menu footer
const menuFooterLinks = document.querySelectorAll(".footer__menu__link");
Array.from(menuFooterLinks).forEach(function(footerLink) {
    footerLink.addEventListener("click", reduceScroll);
});


function reduceScroll(link) {

    // Have a smooth scroll but till a certain point
    link.preventDefault(); // Prevent default anchor behavior

    const targetId = link.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        const offsetTop = targetElement.offsetTop; // Get the top position of the target element
        const offset = 50;

        window.scrollTo({
            top: offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

function toggleMenuOptions() {
    if (menuOptions.style.display === "none" || !menuOptions.style.display) {
        menuOptions.style.display = "flex";
    } else {
        menuOptions.style.display = "none";
    }
}
