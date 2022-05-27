class COsoba
{
    protected nazwisko: string;
    protected wiek: number;
    

    public constructor()
    {
        
        this.nazwisko = "";
        this.wiek = 0;

    }
    
    SetWiek(){
        this.wiek = 20;
        if(this.wiek>0 && this.wiek< 120)
        {
             
        }else{this.wiek=0;}
        
    }
    SetNazwisko(){
        this.nazwisko = "Rafał";
    }
    
    public set setNazwisko(nazwisko : string) {
        nazwisko = "Rafał";
        this.nazwisko = nazwisko;
    }
    public set setWiek(wiek : number) {
        wiek = 20;
        this.wiek = wiek;
    }

    public Drukuj()
    {
        
        console.log("Nazwisko: "+this.nazwisko);
        console.log("Wiek: "+this.wiek);
    }
};

class CPracownik extends COsoba
{
    private zarobek_mies: number;
    public constructor()
    {
        super();
        this.nazwisko = "";
        this.wiek = 0;
        this.zarobek_mies = 0;
        
    }
    public Drukuj()
    {
        console.log("Nazwisko: "+this.nazwisko);
        console.log("Wiek: "+this.wiek);
        console.log("Wiek: "+this.zarobek_mies);
    }


    SetWiek(){
        this.wiek = 20;
        if(this.wiek>0 && this.wiek< 120)
        {
             
        }else{this.wiek=0;}
        
    }
    SetNazwisko(){
        this.nazwisko = "Rafał";
    }

    public Dochod_Roczny()
    {
        let roczny = 12*this.zarobek_mies;
        return roczny;
    }

    

    
};



let osoba = new COsoba();
let pracownik = new CPracownik();
osoba.Drukuj();