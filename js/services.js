// Show content of services
const cards = document.querySelectorAll(".card");

function displayCardParagraph() {
    const paragraph = this.querySelector(".paragraph");
    const arrowUp = this.querySelector(".card__arrow--up");
    const arrowDown = this.querySelector(".card__arrow--down");

    arrowUp.classList.toggle("display-none");
    arrowDown.classList.toggle("display-none");
    paragraph.classList.toggle("display-block");
    paragraph.classList.toggle("display-none");

}

for (const [index, cardElement] of cards.entries()) {
    cardElement.addEventListener("click", displayCardParagraph);
}