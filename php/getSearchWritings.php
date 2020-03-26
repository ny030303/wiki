<?php
header("content-type: application/json");

require("db.php");

$text = $_POST["text"];

$sql = "SELECT * FROM `wiki_post` WHERE title LIKE '" . $text . "%'";

$datas = fetchAll($con, $sql, [$text]);

echo json_encode(array("datas" => $datas));