<?php
if(isset($_POST['name'])){
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "add";
$sr=$_POST['srno'];
$name = $_POST['name'];
$price = $_POST['price'];
$quantity = $_POST['quantity'];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql= " UPDATE `add` SET `name` = '$name' , price = $price , quantity=$quantity WHERE `add`.`srno` = $sr ";
if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
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
    <link rel="stylesheet" href="edit.css">
</head>
<body>
    <form action="edit.php" method="post">
    <h2>Product Id</h2><input type="text" name="srno" id="srno" placeholder="Enter product ID">
        <h2>Product Name</h2><input type="text" name="name" id="name" placeholder="Enter product name">
        <h2>Product Price</h2> <input type="text" name="price" id="price" placeholder="Enter price">    
        <h2>Product Quantity</h2> <input type="text" name="quantity" id="quantity" placeholder="Enter quantity">
        <br><button class="btn1">Update</button>
    </form>
</body>
</html>