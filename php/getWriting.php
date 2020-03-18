<?php
header("content-type: application/json");

require("db.php");

$id = $_POST["id"];

$sql = "SELECT * FROM `wiki_post` WHERE id=?";

$data = fetch($con, $sql, [$id]);

echo json_encode(array("data" => $data));