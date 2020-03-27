<?php

header("content-type: application/json");

require("db.php");

$useridx = $_POST["useridx"];
$title = $_POST["title"];
$contents = $_POST["contents"];

$query = "INSERT INTO `wiki_post`(`useridx`, `created`, `contents`, `title`) VALUES (?,now(),?,?)";
$result = execsql($con, $query, [$useridx, $contents, $title]);

$query2 = "SELECT LAST_INSERT_ID() as id";
$result2 = fetch($con, $query2, []);

echo json_encode(array("result" => $result, "id"=>$result2->id));
