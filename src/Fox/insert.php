<?php
$servername = "localhost";
$username   = "root";   // XAMPP default
$password   = "root123"; // your password
$dbname     = "student"; // your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Name    = $_POST['Name'];
    $Email   = $_POST['Email'];
    $Subject = $_POST['Subject'];
    $Message = $_POST['Message'];

    // safer with prepared statements
    $stmt = $conn->prepare("INSERT INTO users (Name, Email, Subject, Message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $Name, $Email, $Subject, $Message);

    if ($stmt->execute()) {
        echo "New record created successfully <br>";
        echo "<a href='form.html'>Go Back</a>";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
