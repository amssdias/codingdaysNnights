const language = navigator.language;
const availableLanguages = new Set(["es", "ES", "en", "EN"])

if (language && availableLanguages.has(language.split("-")[0])) {
    loadLanguage(language.split("-")[0]);
} else {
    loadLanguage("en");
}

function loadLanguage(lang) {

    fetch(`js/languages/${lang}.json`).then(response => response.json()).then(data => {
        console.log(data);
        applyTranslations(data);
    });
}

function applyTranslations(data) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        // Get the key from the data-translate attribute
        const key = el.getAttribute("data-translate");
        el.textContent = data[key];
    });
}
