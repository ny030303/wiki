<?php
header("content-type: application/json");

require("db.php");

$id = $_POST["id"];
$contents = $_POST['contents'];

$sql = "UPDATE `wiki_post` SET `contents`=? WHERE id=?";

$res = execsql($con, $sql, [$contents, $id]);

echo json_encode(array("result" => $res));