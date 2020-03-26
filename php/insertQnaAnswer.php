<?php

header("content-type: application/json");

require("db.php");

$id = $_POST["id"];
$answer_idx = $_POST["answer_idx"];
$answer_contents = $_POST["answer_contents"];

$query = "UPDATE `wiki_qna` SET `answer_idx`=?,`answer_contents`=?,`answer_created`= now() WHERE `id`=?";
$result = execsql($con, $query, [$answer_idx, $answer_contents, $id]);

echo json_encode(array("result" => $result));
