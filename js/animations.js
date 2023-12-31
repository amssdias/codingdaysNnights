const headings = new Map([
    ["heading-about-me", false],
    ["heading-services", false],
    ["heading-skills", false],
    ["heading-portfolio", false],
    ["heading-testimonials", false]
]);

const observerOptions = {
    root: null,
    threshold: 0.2
};
const headersObserver = new IntersectionObserver(animationTitles, observerOptions);


// Observe each heading and apply initial animation if needed
headings.forEach((_, headingId) => {

    const headingElement = document.getElementById(headingId);
    headersObserver.observe(headingElement);

});

function animationTitles(entries) {

    // For each entry/section, verify if is intersection to animate
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateHeading(entry.target);
            headersObserver.unobserve(entry.target);
        }
    });
}

function animateHeading(headingElement) {
    if (!headings.get(headingElement.id)) {
        headingElement.classList.add("animation-move-in-bottom");
        headings.set(headingElement.id, true);
    }
}
