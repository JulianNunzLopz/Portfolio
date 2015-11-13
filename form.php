<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

mail("nunezlopez.julian@gmail.com", "Portfolio $name", "$message","From: $email");

header('Location : index.html');
exit();
?>