// Show content of services

document.querySelectorAll(".card").forEach(function (cardElement) {
    cardElement.addEventListener("click", displayCardParagraph);
})

function displayCardParagraph() {
    const paragraph = this.querySelector(".paragraph");
    const contactButton = this.querySelector("a.btn--contact");
    const arrowUp = this.querySelector(".card__arrow--up");
    const arrowDown = this.querySelector(".card__arrow--down");

    arrowUp.classList.toggle("display-none");
    arrowDown.classList.toggle("display-none");
    paragraph.classList.toggle("display-block");
    paragraph.classList.toggle("display-none");
    contactButton.classList.toggle("display-none");
    contactButton.classList.toggle("display-block");

}
