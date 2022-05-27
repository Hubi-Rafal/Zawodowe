class Osoba
{
    imie:string = "";
    nazwisko:string = "";
    wiek:number = 0;

    constructor()
    {
        this.imie = "marek";
        this.nazwisko = "marian";
        this.wiek = 21;
    }
    Wypisz()
    {
        console.log("Imie: "+this.imie);
        console.log("Nazwisko: "+this.nazwisko);
        console.log("Wiek: "+this.wiek);
    }


}

class Ksiazka
{
    tytul: string = "";
    data_wydania: number = 0;
    constructor(){
        this.tytul = "Tytul";
        autor: Osoba;
        this.data_wydania = 2017

    }

    Wypisz()
    {
        console.log("Tytuł: "+this.tytul);
        console.log("Autor");
        console.log();
    }

}