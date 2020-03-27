<?php
header("content-type: application/json");

require("db.php");

$title = $_POST["title"];

$sql = "SELECT * FROM `wiki_post` WHERE title=?";

$data = fetch($con, $sql, [$title]);

echo json_encode(array("data" => $data));