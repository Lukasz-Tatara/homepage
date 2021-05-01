console.log("Hello world!");

let header = document.querySelector(".header");
let Button = document.querySelector(".js-button__delate");
let table = document.querySelector(".tableOn");
let secondaryButton = document.querySelector(".js-button__delate2");
let show = document.querySelector(".showOff");
let showImages = document.querySelector(".js-button__showImages");

Button.addEventListener("click", () => {
    header.classList.toggle("on");

    if (Button.innerText === "USUŃ NAGŁÓWEK") {
        Button.innerText = "PRZYWRÓĆ NAGŁÓWEK";
    } else {
        Button.innerText = "USUŃ NAGŁÓWEK"
    }
});

secondaryButton.addEventListener("click", () => {
    table.classList.toggle("on");

    if (secondaryButton.innerText === "UKRYJ TABELĘ") {
        secondaryButton.innerText = "POKAŻ TABELĘ";
    } else {
        secondaryButton.innerText = "UKRYJ TABELĘ"
    }
});

showImages.addEventListener("click", () => {
    show.classList.toggle("showOn");

    if (showImages.innerText === "POKAŻ ZDJĘCIA") {
        showImages.innerText = "UKRYJ ZDJĘCIA";
    } else {
        showImages.innerText = "POKAŻ ZDJĘCIA"
    }
});