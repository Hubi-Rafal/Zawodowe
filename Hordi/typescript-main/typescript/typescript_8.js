"use strict";
class Osoba {
    constructor() {
        this.imie = "";
        this.nazwisko = "";
        this.wiek = 0;
        this.imie = "marek";
        this.nazwisko = "marian";
        this.wiek = 21;
    }
    Wypisz() {
        console.log("Imie: " + this.imie);
        console.log("Nazwisko: " + this.nazwisko);
        console.log("Wiek: " + this.wiek);
    }
}
class Ksiazka {
    constructor() {
        this.tytul = "";
        this.data_wydania = 0;
        this.tytul = "Tytul";
        autor: Osoba;
        this.data_wydania = 2017;
    }
    Wypisz() {
        console.log("Tytuł: " + this.tytul);
        console.log("Autor" + this.Autor);
        console.log();
    }
}
