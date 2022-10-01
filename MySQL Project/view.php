<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="view.css">
<title>Table with database</title>
<style>
table {
border-collapse: collapse;
width: 100%;
color: #588c7e;
font-family: monospace;
font-size: 25px;
text-align: left;
}

tr:nth-child(even) {background-color: #f2f2f2}
</style>
</head>
<body>
<table>
<tr>
<th>Product Name</th>
<th>Product Price</th>
<th>Product Quantity</th>
</tr>
<?php
$conn = mysqli_connect("localhost", "root", "", "add");
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM `add` ORDER BY `add`.`name` ASC";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
while($row = $result->fetch_assoc()) {
echo "<tr><td>" . $row["name"]. "</td><td>" . $row["price"] . "</td><td>"
. $row["quantity"]. "</td></tr>";
}
echo "</table>";
} else { echo "0 results"; }
$conn->close();
?>
</table>
</body>
</html>