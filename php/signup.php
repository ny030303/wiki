<?php

header('Content-Type: application/json');

require("db.php");

$id = $_POST["id"];
$pwd = $_POST["pwd"];
$name = $_POST["name"];


$query = "INSERT INTO `wiki_user`(`id`, `pwd`, `name`) VALUES (?,password(?),?)";
$bRes = execsql($con, $query, [$id, $pwd, $name]);

echo json_encode(array("result" => $bRes));

?>