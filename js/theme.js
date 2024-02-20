// Default colors
const colorWhite = "#fff";
const colorGrey = "#fafafa";
const colorCards = "#09101a";
const colorGreenLight = "#55e6a5";
const colorSlateLight = "#cbd5e1";

// Bright colors
const colorSkyLight = "#f0f9ff";
const colorEmeraldDark = "#022c22";

const bright = "bright";
const dark = "dark";
const themeEl = document.querySelector(".theme");

const isThemeBright = (theme, colorForBright, colorForDark) => theme === bright ? colorForBright : colorForDark;

themeEl.addEventListener("click", function (e) {

    const theme = e.target.closest(".theme").dataset.theme;
    themeEl.style.setProperty("--hover-background-color", "none");

    changeHeaderTheme(theme);
    changeBackgroundTheme(theme);
    changeTypographyTheme(theme);
    changeCardsTheme(theme);

    // themeEl.dataset.theme = themeEl.dataset.theme === "bright" ? "dark" : "bright";
    themeEl.dataset.theme = isThemeBright(themeEl.dataset.theme, dark, bright)
})

function changeHeaderTheme(theme) {

    let backgroundImageStyle;

    if (theme === bright) {
        backgroundImageStyle = `linear-gradient(
            to bottom, 
            rgb(255, 255, 255, 0%), 
            rgb(255, 255, 255, 0%)), 
            url(.../../images/header-2.avif)
        `;
    } else {
        backgroundImageStyle = `linear-gradient(
            to bottom, 
            rgba(15, 15, 15, 0.7), 
            rgba(15, 15, 15, 0.9)), 
            url(.../../images/header-2.avif)
        `;
    }

    document.getElementById("home").style.backgroundImage = backgroundImageStyle;

}

function changeBackgroundTheme(theme) {
    // Change navigation bar background
    document.querySelector(".navigation-bar").style.backgroundColor = isThemeBright(theme, colorEmeraldDark, colorCards);
    document.getElementById("navigation-bar__list").style.backgroundColor = isThemeBright(theme, colorEmeraldDark, colorCards);

    // Change sections background
    document.querySelector("body").style.backgroundColor = isThemeBright(theme, colorGrey, "");
    document.querySelector(".section-skills").style.backgroundColor = isThemeBright(theme, colorSkyLight, colorCards);
    document.querySelector(".section-testimonials").style.backgroundColor = isThemeBright(theme, colorSkyLight, colorCards)

    // Change buttons background
    document.querySelectorAll(".btn--skills").forEach(btn => {
        btn.style.color = isThemeBright(theme, colorEmeraldDark, colorWhite);

        // btn.style.setProperty("--hover-color-letters", theme === "bright" ? "red" : colorEmeraldDark);
        btn.style.setProperty("--hover-background-color", isThemeBright(theme, colorWhite, colorGreenLight));
    })

    document.querySelectorAll(".btn--contact--form").forEach(btn => {
        btn.style.backgroundColor = isThemeBright(theme, colorEmeraldDark, colorGreenLight);
        btn.style.color = isThemeBright(theme, colorWhite, colorEmeraldDark);
    })
}

function changeTypographyTheme(theme) {
    // Change default headers
    document.querySelectorAll(".heading-secondary").forEach(header => header.style.color = isThemeBright(theme, colorEmeraldDark, colorWhite));
    document.querySelectorAll(".heading-tertiary").forEach(header => header.style.color = isThemeBright(theme, colorEmeraldDark, colorWhite));
    document.querySelectorAll(".heading-fifth").forEach(header => header.style.color = isThemeBright(theme, colorEmeraldDark, colorWhite));
    document.querySelectorAll(".section-about-me .paragraph").forEach(p => p.style.color = isThemeBright(theme, colorEmeraldDark, colorSlateLight));

    // Change sections typography
    document.querySelectorAll(".section-portfolio .heading-quaternary").forEach(header => header.style.color = isThemeBright(theme, colorEmeraldDark, colorWhite));
    document.querySelectorAll(".section-portfolio .btn").forEach(btn => {
        btn.style.color = isThemeBright(theme, colorEmeraldDark, colorWhite);
        btn.style.borderBottom = isThemeBright(theme, `2px solid ${colorEmeraldDark}`, `2px solid ${colorWhite}`);
    });
    document.querySelectorAll(".card .paragraph").forEach(p => p.style.color = isThemeBright(theme, colorWhite, "#a2a2a2"));

    // Change footer typography
    document.querySelectorAll(".footer .heading-fifth").forEach(header => header.style.borderBottom = isThemeBright(theme, `2px solid ${colorEmeraldDark}`, `2px solid ${colorWhite}`));

}

function changeCardsTheme(theme) {

    document.querySelectorAll(".card").forEach(card => {
        card.style.backgroundColor = isThemeBright(theme, colorEmeraldDark, colorCards);
        card.color = colorWhite;
    });

}
