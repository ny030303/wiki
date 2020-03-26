<?php
header("content-type: application/json");

require("db.php");

$date = $_GET["date"];

$sql = "select * from `wiki_schedule`
        where start_datetime between '" . $date . " 00:00:00' and '" . $date . " 23:59:59' group by start_datetime";

$data = fetchAll($con, $sql, []);

echo json_encode(array("data" => $data));