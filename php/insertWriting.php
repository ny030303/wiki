<?php

header("content-type: application/json");

require("db.php");

$useridx = $_POST["useridx"];
$title = $_POST["title"];
$contents = $_POST["contents"];

$query = "INSERT INTO `wiki_post`(`useridx`, `created`, `contents`, `title`) VALUES (?,now(),?,?)";
$result = execsql($con, $query, [$useridx, $contents, $title]);

echo json_encode(array("result" => $result));
