"use strict";
class COsoba {
    constructor() {
        this.nazwisko = "";
        this.wiek = 0;
    }
    SetWiek() {
        this.wiek = 20;
        if (this.wiek > 0 && this.wiek < 120) {
        }
        else {
            this.wiek = 0;
        }
    }
    SetNazwisko() {
        this.nazwisko = "Rafał";
    }
    set setNazwisko(nazwisko) {
        nazwisko = "Rafał";
        this.nazwisko = nazwisko;
    }
    set setWiek(wiek) {
        wiek = 20;
        this.wiek = wiek;
    }
    Drukuj() {
        console.log("Nazwisko: " + this.nazwisko);
        console.log("Wiek: " + this.wiek);
    }
}
;
class CPracownik extends COsoba {
    constructor() {
        super();
        this.nazwisko = "";
        this.wiek = 0;
        this.zarobek_mies = 0;
    }
    Drukuj() {
        console.log("Nazwisko: " + this.nazwisko);
        console.log("Wiek: " + this.wiek);
        console.log("Wiek: " + this.zarobek_mies);
    }
    SetWiek() {
        this.wiek = 20;
        if (this.wiek > 0 && this.wiek < 120) {
        }
        else {
            this.wiek = 0;
        }
    }
    SetNazwisko() {
        this.nazwisko = "Rafał";
    }
    Dochod_Roczny() {
        let roczny = 12 * this.zarobek_mies;
        return roczny;
    }
}
;
let osoba = new COsoba();
let pracownik = new CPracownik();
osoba.Drukuj();
