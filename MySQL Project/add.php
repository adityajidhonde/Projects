<?php
$insert = false;
if(isset($_POST['name'])){
    $server = "localhost";
    $username = "root";
    $password = "";

    $con = mysqli_connect($server, $username, $password);
    if(!$con){
        die("connection to this database failed due to" . mysqli_connect_error());
    }
    $name = $_POST['name'];
    $price = $_POST['price'];
    $quantity = $_POST['quantity'];
    $sql = "INSERT INTO `add`.`add` (`name`, `price`, `quantity`, `dt`) VALUES ('$name', '$price', '$quantity', current_timestamp());";

    if($con->query($sql) == true){
        $insert = true;
    }
    else{
        echo "ERROR: $sql <br> $con->error";
    }
    $con->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="add.css">
    <title>Add product</title>
</head>
<body>
    <div class="contain">
        <?php
        if($insert == true){
            echo "<p class='submitMsg'>Item added successfully.</p>";
        }
        ?>
        <form action="add.php" method="post">
        <h2>Product Name</h2><input type="text" name="name" id="name" placeholder="Enter product name">
        <h2>Product Price</h2> <input type="text" name="price" id="price" placeholder="Enter price">    
        <h2>Product Quantity</h2> <input type="text" name="quantity" id="quantity" placeholder="Enter quantity">
        <br>
        <button class="btn1">Add</button>
        </form>
    </div>
</body>
</html>