"use strict";
let obiekt1 = {
    nazwa: "Obiekt 1",
    waga: 20,
    cena: 40
};
let obiekt2 = {
    nazwa: "Obiekt 2",
    waga: 20,
    cena2: 50
};
function drozszy() {
    if (obiekt1.cena > obiekt2.cena2) {
        return obiekt1.nazwa + " jest droższy";
    }
    else {
        return obiekt2.nazwa + " jest droższy";
    }
}
console.log(drozszy());
function suma() {
    // policzyć sume czegoś
}
function nazwy() {
    //   nazwy obiektów
    console.log();
}
class Auto {
    constructor(nazwa, marka, przebieg, wiek) {
        this.nazwa = nazwa;
        this.marka = marka;
        this.przebieg = przebieg;
        this.wiek = wiek;
    }
    ;
    wypisz() {
        return this.nazwa + " " + this.marka + " " + this.przebieg + " " + this.wiek;
    }
}
let auto = new Auto("auto", "auta", 2137, 10);
console.log(auto.wypisz());
