const menuOptions = document.getElementById("navigation-bar__list");

document.getElementById("navigation-bar__icon").addEventListener("click", toggleMenuOptions)

// Use Event delegation for better performance

// NAVIGATION MENU -- Event for smooth scroll
document.querySelector(".navigation-bar").addEventListener("click", function (e) {

    e.preventDefault();
    const targetElement = e.target;

    if (targetElement.classList.contains("navigation-bar__list__item__link")) {
        toggleMenuOptions();
        SmoothScroll(targetElement);
    }
})


// FOOTER MENU ---- Event for Smooth scroll
document.querySelector(".footer__menu").addEventListener("click", function (e) {

    e.preventDefault();
    const targetElement = e.target;

    if (targetElement.classList.contains("footer__menu__link")) {
        SmoothScroll(targetElement);
    }
})


function SmoothScroll(link) {

    const targetId = link.getAttribute('href');
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

    if (window.innerWidth > 600) {
        return
    }

    if (menuOptions.style.display === "none" || !menuOptions.style.display) {
        menuOptions.style.display = "flex";
    } else {
        menuOptions.style.display = "none";
    }
}
