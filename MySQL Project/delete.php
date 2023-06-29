<?php
if(isset($_POST['name'])){
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "add";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$srm=$_POST['name'];

$sql = "DELETE FROM `add` WHERE srno=$srm";

if ($conn->query($sql) === TRUE) {
  echo "Record deleted successfully";
} else {
  echo "Error deleting record: " . $conn->error;
}

$conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="del.css">
</head>
<body>
    <form action="delete.php" method="post">
    <h2>Product ID</h2><input type="text" name="name" id="name" placeholder="Enter product ID">
    <br>
        <button class="btn2">Delete</button>
    </form>
</body>
</html>