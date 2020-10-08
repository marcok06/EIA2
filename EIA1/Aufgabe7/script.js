//Konsolenausgabe
let message1 = "Hello World";
console.log(message1);
//Webseite geladen alert
window.onload = pageLoaded;
function pageLoaded() {
    alert("Die Webseite ist geladen");
}
//Klick auf Bild alert
document.getElementById("toast").addEventListener("click", clickImage);
function clickImage() {
    alert("Lecker Schmecker");
}
//Button Inhalt aendern
document.getElementById("bu1").addEventListener("click", changeSomething);
function changeSomething() {
    document.getElementById("bu1").innerHTML = "Cool";
}
//Klasse aendern
document.getElementById("123").addEventListener("click", ka);
function ka() {
    document.getElementById("123").className = "345";
}
//Variable neuen Wert geben
let var1 = 1;
var1 = 2;
//Rechenaufgaben und Aneinanderreihung
let a, b, c;
a = 5;
b = 6;
c = a + b;
console.log(c);
let x, y, z;
x = "Hallo";
y = " du Frosch";
z = x + y;
console.log(z);
let q = a + x;
console.log(q);
function rechnen() {
    console.log(a + b);
    console.log(a + x);
}
//Neues HTML Element erstellen mit Event-Listener
document.getElementById("bunew").addEventListener("click", createButton);
function createButton() {
    let button = document.createElement("button");
    button.id = "createdButton";
    button.innerHTML = "Neuer Button welcher bei Klick Inhalt aendert";
    document.getElementById("body").appendChild(button);
    document.getElementById("createdButton").addEventListener("click", changeNew);
}
// Inhalt des neuen Elements bei klick aendern
function changeNew() {
    document.getElementById("createdButton").innerHTML = "Anderer Inhalt";
}
//Funktion mit return nutzen, bei der eine Value (r) zurueck kommt
let r = optreturn();
function optreturn() {
    return a * b;
}
//Boolean
let buttoncounter = 0;
document.getElementById("count").addEventListener("click", counter);
function counter() {
    buttoncounter += 1;
    document.getElementById("count").innerHTML = "Ich wurde " + buttoncounter + " x geklickt";
}
;
document.getElementById("bool").addEventListener("click", bool);
function bool() {
    if (buttoncounter != 0) {
        if (buttoncounter % 2 == 0) {
            document.getElementById("bool").innerHTML = "Die Zahl ist gerade";
        }
        else {
            document.getElementById("bool").innerHTML = "Die Zahl ist ungerade";
        }
    }
}
//# sourceMappingURL=script.js.map