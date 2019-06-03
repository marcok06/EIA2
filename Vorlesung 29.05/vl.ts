/*
let monsterName0 : string = "Karl";
let monsterName1 : string = "Hans";
let monsterName2 : string = "Peter";
*/

//[] sind arrays, man kann fortlaufend Variablen definieren (zB Monster 0-3)
//Zugriff auf alle arrays: console.log monsterName listet alle monsterNamen auf
//

let monsterName = ["Karl", "Hans", "Leander"];
//Zugriff auf arrays zB consolge.log (monsterName[0] fuer Karl)


let monsterHitPoints = [5, 7, 10];


function getMonsterData(){
    console.log ("Monster 0: " + monsterName[0] + " hp: " + monsterHitPoints[0]);
    console.log ("Monster 1: " + monsterName[1] + " hp: " + monsterHitPoints[1]);
    console.log ("Monster 2: " + monsterName[2] + " hp: " + monsterHitPoints[2]);
}

//array funktionen zb. monsterName.lentgh gibt die Anzahl der Listeneintraege aus, in diesem Fall 3
//andere funktion .push wird array erweitert (hinten drangehangen)
function pushMonster(){
    let newName : string = "Neues Monster";
    monsterName.push(newName);
}
// array monsterName.pop() wird der letzte Eintrag des Arrays monsterName geloescht

//Objekte sind mehrer Variablen zusammengefasst an einem Ort//Komplexer Datentyp auf Grundage primitiver Datentypen
interface Monster{
    name: string;
    hitpoints: number;
    experience: number;
}



/* Fehlersuche
Zeile 78 monsterMoney : 0 wird erstens nirgendwo anders genutzt (und somit nutzlos) --> geloescht
Zeile 131 vorgesagter Fehler