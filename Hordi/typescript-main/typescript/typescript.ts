

class Kwadratowe{
    private A: number;
    private B: number;
    private C: number;
    
    constructor(a:number,b:number,c:number)
    {
        this.A=a;
        this.B=b;
        this.C=c;
    }
    

    Delta()
    {
        
            let delta = (this.B**2)-4*this.A*this.C;
            return delta;
               
    }

    Pierwiastki(delta: number)
    {
        if(this.A==0)
        {
            delta = (-(this.C)/this.B);
            return delta;
        }
        if(delta>0) 
        {
            
            let x1 = (-(this.B)-Math.sqrt(delta))/2*this.A;
            
            let x2 = (-(this.B)+Math.sqrt(delta))/2*this.A;
            
            let array = [x1, x2];
            return array;
        }
        else if(delta==0){
            let x0 = (-(this.B))/2*this.A;
            let array = [x0];
            return array;
        }
        else if(delta<0)
        {
            let array = "delta ujemna";
            return array;
        }
    }

    
    Wypisz(pierwiastki:any)
    {
        console.log(pierwiastki);
    }
}
let kwadrat = new Kwadratowe(0,4,5);
let delta = kwadrat.Delta();
let pierwiastki = kwadrat.Pierwiastki(delta);
kwadrat.Wypisz(pierwiastki);
