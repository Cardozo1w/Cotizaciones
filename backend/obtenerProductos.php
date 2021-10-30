<?php
ini_set('display_errors', 1);

$servername = "localhost";
$database = "cotizaciones";
$username = "root";
$password = "root";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if (!$conn) {
die("Connection failed: " . mysqli_connect_error());
}

$array = [];

$resultado = $conn->query("CALL cotizaciones.SP_OBTENERPRODUCTOS()");


while($reg = $resultado->fetch_assoc()){
array_push($array, $reg);
}



echo json_encode($array);