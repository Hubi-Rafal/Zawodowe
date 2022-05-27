<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Twój Wskaźnik BMI</title>
    <link rel="stylesheet" href="styl4.css">

<?php
    class Waga
    {
        private $conn;
        function __construct()
        {
            $username = "root";
            $pass = "";
            $servername = "localhost";
            $dbname = "egzamin";

            $this->conn = mysqli_connect($servername,$username,$pass,$dbname);

        }        

        function Skrypt1($waga,$wzrost)
        {
            
                $bmi = ($waga/pow($wzrost,2))*10000;
                echo "Twoja waga: $waga;";
                echo "Twój wzrost: $wzrost;<br>";
                echo "Twoje BMI: $bmi";
                $date = getdate();
                $data = $date['year']."-".$date['mon']."-".$date['mday'];

                if($bmi>0)
                {
                    $stan = 1;
                }
                if($bmi>19)
                {
                    $stan = 2;
                }
                if($bmi>26)
                {
                    $stan = 3;
                }
                if($bmi>31)
                {
                    $stan = 4;
                }

            $sql = "INSERT INTO wynik SET bmi_id=$stan, data_pomiaru='$data', wynik=$bmi";
            $result = mysqli_query($this->conn,$sql);
            

            $this->conn->close();
        }

        function Skrypt2()
        {
            $sql = "SELECT id, informacja, wart_min FROM bmi";

            $result = mysqli_query($this->conn,$sql);
            if($result->num_rows>0)
            {
                while($row = $result->fetch_assoc())
                {
                    echo "<tr><td>".$row['id']."</td><td>".$row['informacja']."</td><td>".$row['wart_min']."</td></tr>";
                }
            }
            $this->conn->close();
        }
    }


?>


</head>
<body>

    <div class="banner">
        <h2>Oblicz wskaźnik BMI</h2>
    </div>
    
    <div class="logo">
        <img src="wzor.png" alt="liczymy BMI">
    </div>

    <div class="left">
        <img src="rys1.png" style="height:100%" alt="zrzuć kalorie!">
    </div>

    <div class="right">
        <h1>Podaj Dane</h1>

        <form action="" method="post">
            Waga:<input type="number" name="waga"><br>
            Wzrost [cm]: <input type="number" name="wzrost"><br>
            <input type="submit" value="Licz BMI i zapisz wynik">
        </form>
       <!-- skrypt1 -->
       <?php
            $waga = new Waga;
            if(!isset($_POST['waga'])||!isset($_POST['wzrost']))
            {

            }else{
                $waga->Skrypt1($_POST['waga'],$_POST['wzrost']);
            }

        ?>
       
    </div>

    <div class="glowny">
        <table class="table">
        <thead>
            <th>lp.</th>
            <th>Interpretacja</th>
            <th>zaczyna się od...</th>
        </thead>
        <tbody>
            <!-- Skrypt 2 -->
            <?php
            
            $waga = new Waga;
            $waga->Skrypt2();
            ?>
            
        </tbody>
    
        </table>
    </div>

    <div class="stopka">
        Autor: 05290202198
        <a href="kw2.png">Wynik działania kwerendy 2</a>
    </div>
</body>
</html>