<?php

header("content-type: application/json");

require("db.php");

$title = $_POST["title"];
$contents = $_POST["contents"];
$writer_id = $_POST["writer_id"];


$query = "INSERT INTO `wiki_qna`(`title`, `contents`, `created`, `writer_idx`) VALUES (?,?,now(),?)";
$result = execsql($con, $query, [$title, $contents, $writer_id]);

echo json_encode(array("result" => $result));
