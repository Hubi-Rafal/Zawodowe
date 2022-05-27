<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rozgrywki Futbolowe</title>

    <link rel="stylesheet" href="styl.css">

<?php

class Futbol{
    
    private $conn;
    public function __construct()
    {
        $username = "root";
        $server = "localhost";
        $pass = "";
        $dbname = "egzamin";
        
        $this->conn = mysqli_connect($server, $username, $pass, $dbname);
    }

       function znajdzMecze()
       {

            $sql = "SELECT * FROM rozgrywka";
           
            $query = mysqli_query($this->conn, $sql);
        
            if(mysqli_num_rows($query)>0)
            {
                while($row = mysqli_fetch_assoc($query))
                {
                    echo 
                    "<div class='blok'>
                        <h3>".$row['zespol1']."-".$row['zespol2']."</h3>
                        <h4>".$row['wynik']."</h4> 
                    W dniu ".$row["data_rozgrywki"]."
                    </div>";
                }
            }
    
        } 

        function znajdzZawodnikow($poz)
        {

                $sql = "SELECT imie, nazwisko FROM zawodnik WHERE pozycja_id = '$poz'";
                $query = mysqli_query($this->conn, $sql);
                if(mysqli_num_rows($query)>0)
            {
                while($row = mysqli_fetch_assoc($query))
                {
                    echo "<ul>
                        <li>".$row['imie']." ".$row['nazwisko']."</li>

                    </ul>";
                }
                
            }else{

            }
    }


};

?>





</head>
<body>
    <div class="banner">
    <h2>Światowe rozgrywki piłkarskie</h2>
     <img src="boisko.jpg" alet="piłkarz" style="width:1000px;height:300px;"> 
</div>


<div class="mecze">
    <?php $futbol = new Futbol;
    
    $futbol->znajdzMecze();?>

</div>
<br><br>

    <div class="blok_glwn">  
            <h2>Reprezentacja Polski</h2>  
    </div>


    <div class="blok_lw">
        <p>
            Podaj pozycję zawodników (1 - bramkarze, 2 - obrońcy, 3 - pomocnicy, 4 - napastnicy)
        </p>
            <form method="post" action="">
                <input type="number" name="pozycja">
                <input type="submit">
            </form>
       
            <?php
            $futbol = new Futbol();
            if(!isset($_POST['pozycja']))
            {

            }else{
                $poz = $_POST['pozycja'];
                $futbol->znajdzZawodnikow($poz);
            }
            
            ?>
    </div>


    <div class="blok_prw">
        <img src="zad1.jpg" alt="piłkarz">
        <p>Autor: 00000000000</p>
    </div>

    
</body>
</html>