
<?php
    $cookie_name = "user";
    setcookie($cookie_name,"username",time()+5,'/');
    

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Odloty Samolotów</title>
<link rel="stylesheet" href="styl6.css">

<?php

class Lotnisko
{
    private $conn;

    public function __construct()
    {
        $server = "localhost";
        $username = "root";
        $password = "";    
        $dbname = "odloty";

        $this->conn = mysqli_connect($server, $username, $password,$dbname);
        
    }


    function skrypt1()
    {
        $sql = "SELECT id, nr_rejsu, czas, kierunek, status_lotu FROM odloty ORDER BY czas DESC";

        $query = mysqli_query($this->conn, $sql);

        if($query->num_rows > 0)
        {
            while($row = mysqli_fetch_assoc($query))
            {
                echo "<tr><td>".$row['id']."</td>"."<td>".$row['nr_rejsu']."</td>"."<td>".$row['czas']."</td>"."<td>".$row['kierunek']."</td>"."<td>".$row['status_lotu']."</td></tr>";
            }
        }


        $this->conn->close();
    }

    function skrypt2()
    {
        if(!isset($_COOKIE['user'])) {
            echo "<p><i>Dzień Dobry! Sprawdź Regulamin Naszej Strony</i></p>";
          } else {
            echo "<p><b>Miło nam, że nas znowu odwiedziłeś.</b></p>";
            
          }


        $this->conn->close();
    }

}



?>


</head>
<body>

<div class="banner1">
    <h2>Odloty Samolotów</h2>

</div>

<div class="banner2"><img src="zad6.png" alt="logotyp"style="height:100%"></div>

<div class="blok_glw">
<h4>Tabela Odlotów</h4>



    <table>
    
        <thead>
            <th>
                lp.
            </th>

            <th>
                Numer Rejsu
            </th>

            <th>
                Czas
            </th>

            <th>
                Kierunek
            </th>

            <th>
                Status
            </th>
        </thead>
        <tbody>
        <?php
    $Lotnisko = new Lotnisko();
    $Lotnisko->skrypt1();


?>
        </tbody>


    </table>
</div>



<div class="stopka1">
    <a href="kw1.png"> Pobierz Obraz</a>
</div>

<div class="stopka2">
    <!-- skrypt2 -->
    <?php
    $Lotnisko = new Lotnisko();
    $Lotnisko->skrypt2();

    ?>
    </div>

<div class="stopka3">
    Autor: 00000000000
</div>
    
</body>
</html>