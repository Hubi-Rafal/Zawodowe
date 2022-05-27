<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteka miejska</title>

<link rel="stylesheet" href="styl.css">




<?php

    class Biblioteka
    {
        private $conn;

        public function __construct(){
            $username = "root";
            $servername = "localhost";
            $pass = "";
            $dbname = "ksiegarnia";


            $this->conn = mysqli_connect($servername, $username , $pass, $dbname);
        }

        function skrypt1(){
            $sql = "SELECT imie, nazwisko FROM autorzy";

            $query = mysqli_query($this->conn,$sql);

            if($query->num_rows>0)
            {
                while($row = $query->fetch_assoc())
                {
                    echo "<li>".$row['imie']." ".$row['nazwisko']."</li>";
                }
            }
            $this->conn->close();
        }

        function skrypt2($imie, $nazwisko, $data){
                           
            $kodIm = substr($imie,  0,2);
            $kodNaz = substr($nazwisko,0,2);
            $kodDat = substr($data,-2);
            

            $kod = $kodIm.$kodNaz.$kodDat;
            $kod = strtoupper($kod);
            echo "<br><br>Czytelnik ".$imie." ".$nazwisko." został dodany do bazy danych.";
        

            $sql = "INSERT INTO czytelnicy (imie, nazwisko, kod) VALUES ('$imie', '$nazwisko', '$kod')";
            $query = mysqli_query($this->conn,$sql);

        
        }
    }


?>

</head>
<body>
    
<div class="banner">
    <h2>Miejska Biblioteka Publiczna w Książkowicach</h2>
</div>

<div class="left">
    <h3>W naszych zbiorach znajdziesz dzieła następujących autorów</h3>
    
                <ul>
            <?php
                $biblioteka = new Biblioteka();
                $biblioteka->skrypt1();
            ?>

            <!-- skrypt 1-->
                </ul>

</div>
<div class="middle">

<h3>Dodaj nowego czytelnika</h3>
<form action="" method="post">
    
        Imię: <input type="text" name="imie"><br>
        Nazwisko: <input type="text" name="nazwisko"><br>
        Data urodzenia: <input type="number" name="data_ur"><br>
        <input type="submit" value="DODAJ">

    <?php
        $biblioteka = new Biblioteka();
    if(!isset($_POST['imie'])||!isset($_POST['nazwisko'])||!isset($_POST['data_ur']))
    {

    }else{
        $imie = $_POST['imie'];
        $nazwisko = $_POST['nazwisko'];
        $data = $_POST['data_ur'];

        $biblioteka->skrypt2($imie, $nazwisko, $data);
    }
               
    
    ?>
        
</form>

</div>

<div class="right">

    <img src="biblioteka.png" alt="książki">
    <h4>ul. Czytelnicza 25 <br>
    12-120 Książkowice <br>
    tel.: 123123123<br>
    e-mail: <a href="mailto:biuro@biblioteka.pl">biuro@biblioteka.pl</a></h4>
</div>

<div class="stopka">Projekt strony: 00000000000</div>
</body>
</html>