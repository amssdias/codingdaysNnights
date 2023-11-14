let headingAboutMe = document.getElementById("heading-about-me");
let headingServices = document.getElementById("heading-services");
let headingSkills = document.getElementById("heading-skills");
let headingPortfolio = document.getElementById("heading-portfolio");

let headingAboutMeAnimation = false;
let headingServicesAnimation = false;
let headingSkillsAnimation = false;
let headingPortfolioAnimation = false;


function addAnimationHeadings() {
    let headingAboutMePosition = headingAboutMe.getBoundingClientRect().top + window.scrollY;
    let headingServicesPosition = headingServices.getBoundingClientRect().top + window.scrollY;
    let headingSkillsPosition = headingSkills.getBoundingClientRect().top + window.scrollY;
    let headingPortfolioPosition = headingPortfolio.getBoundingClientRect().top + window.scrollY;
    
    let windowBottomPosition = window.scrollY + window.innerHeight;

    if (!headingAboutMeAnimation && windowBottomPosition > headingAboutMePosition) {
        headingAboutMe.classList.add("animation-move-in-bottom");
        headingAboutMeAnimation = true;
    }
    
    if (!headingServicesAnimation && windowBottomPosition > headingServicesPosition) {
        headingServices.classList.add("animation-move-in-bottom");
        headingServicesAnimation = true;
    }
    
    if (!headingSkillsAnimation && windowBottomPosition > headingSkillsPosition) {
        headingSkills.classList.add("animation-move-in-bottom");
        headingSkillsAnimation = true;
    }
    
    if (!headingPortfolioAnimation && windowBottomPosition > headingPortfolioPosition) {
        headingPortfolio.classList.add("animation-move-in-bottom");
        headingPortfolioAnimation = true;
    }

    if (
        headingAboutMeAnimation && headingServicesAnimation && 
        headingSkillsAnimation && headingPortfolioAnimation) {
            window.removeEventListener("scroll", addAnimationHeadings);
    }
}

window.addEventListener("scroll", addAnimationHeadings);
