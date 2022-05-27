class Adres{
    miasto: string = "";
    ulica: string = "";
    numer: number = 0;

    constructor(miasto: string, ulica: string, numer: number){
        this.miasto = miasto;
        this.ulica = ulica;
        this.numer = numer;
    }
    Wyswietl()
    {
        console.log("Miasto: "+this.miasto);
        console.log("Ulica: "+this.ulica);
        console.log("Numer: "+this.numer);
    }
}


class TOsoba
{
    public imie: string = "";
    public nazwisko: string = "";
    public wiek: number = 0;
    adres = new Adres("Biała Podlaska","Narutowicza",5);
    
    constructor(imie: string, nazwisko: string, wiek: number)
    {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
        this.adres = new Adres("Biała Podlaska","Narutowicza",5);
        
    }

    Wyswietl()
    {
        console.log("Imie: "+this.imie);
        console.log("Nazwisko: "+this.nazwisko);
        console.log("Wiek: "+this.wiek);
        console.log("Adres: "+this.adres.miasto+", "+this.adres.ulica+" "+this.adres.numer);
    }

    PodajImie()
    {
        console.log("Imie: "+this.imie);
    }
    PodajNazwisko()
    {
        console.log("Nazwisko: "+this.nazwisko);
    }
    
}



class TStudent extends TOsoba
{
    public kierunek: string = "";
    public rok: number = 0;

    constructor(imie: string, nazwisko: string, wiek:number,kierunek: string, rok: number)
    {
        super(imie,nazwisko,wiek);
        this.kierunek = kierunek;
        this.rok = rok;
    }

    Wyswietl() 
    {
        console.log("Imie: "+this.imie);
        console.log("Nazwisko: "+this.nazwisko);
        console.log("Wiek: "+this.wiek);
        console.log("Adres: "+this.adres.miasto+", "+this.adres.ulica+" "+this.adres.numer);
        console.log("Kierunek: "+this.kierunek);
        console.log("Rok: "+this.rok);
    }


    PodajKierunek()
    {
        console.log("Kierunek: "+this.kierunek);
    }

};


class TNauczyciel extends TOsoba{

    specjalizacja:string = "";
    dziedzina:string = "";
    constructor(imie:string,nazwisko:string,wiek:number,specjalizacja:string,dziedzina:string)
    {
        super(imie,nazwisko,wiek);
        this.specjalizacja = specjalizacja;
        this.dziedzina = dziedzina;
    }

    Wyswietl()
    {
        console.log("Imie: "+this.imie);
        console.log("Nazwisko: "+this.nazwisko);
        console.log("Wiek: "+this.wiek);
        console.log("Adres: "+this.adres.miasto+", "+this.adres.ulica+" "+this.adres.numer);
        console.log("Dziedzina: "+this.dziedzina);
        console.log("Specjalizacja: "+this.specjalizacja);
    }

    PodajSpecjalizacja()
    {
        console.log(this.specjalizacja);
    }
    PodajDziedzina()
    {
        console.log(this.dziedzina);
    }
};

function Testuj()
{
    let st = new TStudent("Marek","Mors",22,"Programista",3);
    st.Wyswietl();

    
    console.log();
    
    
    let os = new TOsoba("Hubert", "Rafał", 16);
    os.Wyswietl();
    
    
    console.log();

    os.PodajNazwisko();

    st.PodajNazwisko();
    st.PodajKierunek();
    
    console.log();
    
    
    let na = new TNauczyciel("ALbert", "Dzban",40,"C#","Programowanie");
    na.Wyswietl();
}


Testuj();
