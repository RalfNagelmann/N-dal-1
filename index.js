const profiilipilt = document.querySelector("#profiilipilt");
const esinimiSpan = document.querySelector("#esinimi");
const vanusSpan = document.querySelector("#vanus");
const staatusSpan = document.querySelector("#staatus");
const btnUuendaProfiili = document.querySelector("#uuendabtn");

const onvõlur = confirm("Kas sa oled võlur?");

if(onvõlur === true){
    console.log("Tere tulemast Hogwarti!");
}
else {
    console.log("Ei saa Hogwarti!");
    profiilipilt.src = "images/image2.jpg";
    esinimiSpan.innerHTML = "Dudley Dursley";
    vanusSpan.innerHTML = "69";
    staatusSpan.innerHTML = "Inimene";
}

btnUuendaProfiili.addEventListener("click", () => {
    profiilipilt.src = "images/image3.jpg";
    esinimiSpan.innerHTML = "Suvaline naine";
    vanusSpan.innerHTML = "21";
    staatusSpan.innerHTML = "Peaaegu inimene";
});