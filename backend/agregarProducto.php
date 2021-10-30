<?php
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


$nombre = $_POST['nombre'];
$precio = $_POST['precio'];



$sentencia = $conn->prepare("CALL cotizaciones.SP_CREATEPROD('$nombre', $precio);");
$sentencia->execute();
