<?php
header("content-type: application/json");

require("db.php");

$sql = "SELECT id, title, created FROM `wiki_post` ORDER BY created DESC limit 18";

$data = fetchAll($con, $sql, []);

echo json_encode(array("data" => $data));