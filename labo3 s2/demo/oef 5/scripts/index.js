const setup = () => {
    document.querySelector(".button").addEventListener("click", bereken);
}

const bereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("nummer");
    let btwtarief = document.getElementsByClassName("btw");
    let subtotals = document.getElementsByClassName("subtotaal");

    let totaal = 0;

    for (let i = 0; i < prijzen.length; i++) {
        let prijs = parseFloat(prijzen[i].textContent.replace(" euro", "").trim());
        let aantal = parseFloat(aantallen[i].value) || 0;
        let btw = parseFloat(btwtarief[i].textContent.replace("%", "").trim()) / 100;

        let subtotaal = (prijs * aantal) * (1 + btw);
        subtotals[i].textContent = subtotaal.toFixed(2) + " EUR";

        totaal += subtotaal;
    }

    document.querySelector(".totaal").textContent = totaal.toFixed(2) + " EUR";
}

window.addEventListener("load", setup);
