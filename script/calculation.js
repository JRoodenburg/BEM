window.addEventListener("load", loaded, false);
var goedS = 0;
var foutS = 0;

// var som = document.getElementById("som");
var invoer = document.getElementById("invoer");
// var plaatje = document.getElementById("plaatje");
// var button = document.getElementById("button");
var vragenG = document.getElementById("goed");
var vragenF = document.getElementById("fout");
var opgave;

function loaded() {

    var a = Math.floor(Math.random() * 9 + 1);
    var b = Math.floor(Math.random() * 9 + 1);
    opgave = a + "*" + b;
    document.getElementById("som").innerHTML = opgave;

}

function clicked() {
    if (invoer.value == eval(opgave)) {
        // plaatje.src = "goed.gif";
        goedS = goedS + 1;
        loaded();
        invoer.value = "";

    } else if (invoer.value != eval(opgave)) {
        // plaatje.src = "fout.jpg";
        foutS = foutS + 1;
        invoer.value = "";
    }

    vragenF.innerHTML = "You answered: " + foutS + " questions wrong!";
    vragenG.innerHTML = "You answered: " + goedS + " questions right!";
}

invoer.addEventListener("keydown", (e) => {

    if (e.keyCode == 13) {
        clicked();
    }
});