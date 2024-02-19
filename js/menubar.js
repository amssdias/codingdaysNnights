const menuOptions = document.getElementById("navigation-bar__list");

document.getElementById("navigation-bar__icon").addEventListener("click", toggleMenuOptions)


function handleSmoothScrollOnClick(className, e) {
    // Use Event delegation for better performance
    e.preventDefault();
    const targetElement = e.target;

    if (targetElement.classList.contains(className)) {

        if (className === "navigation-bar__list__item__link") toggleMenuOptions();

        const targetId = targetElement.getAttribute('href');
        const elementToScroll = document.querySelector(targetId);
        elementToScroll ? SmoothScroll(elementToScroll) : "";
    }
}

function SmoothScroll(elementToScroll) {

    // Update url
    history.replaceState(undefined, "", `#${elementToScroll.id}`);

    // Get the top position of the target element
    const offsetTop = elementToScroll.offsetTop;
    const offset = 50;

    window.scrollTo({
        top: offsetTop - offset,
        behavior: 'smooth'
    });

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


// NAVIGATION MENU ---- Event for smooth scroll
document.querySelector(".navigation-bar").addEventListener(
    "click",
    handleSmoothScrollOnClick.bind(null, "navigation-bar__list__item__link")
)

// FOOTER MENU ---- Event for Smooth scroll
document.querySelector(".footer__menu").addEventListener(
    "click",
    handleSmoothScrollOnClick.bind(null, "footer__menu__link")
)

// LOAD PAGE ---- Event when page is load
window.addEventListener("load", function (e) {

    const id = window.location.hash.slice(1);

    const targetElement = document.getElementById(id);
    console.log(targetElement);

    if (!targetElement) return;
    SmoothScroll(targetElement);
})
