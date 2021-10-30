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


$rfc = $_POST['rfc'];
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];

$sentencia = $conn->prepare("CALL cotizaciones.SP_CREATECLIENTE('$rfc', '$nombre', '$apellidos', '$telefono', '$correo');");
$sentencia->execute();
