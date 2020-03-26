<?php
header("content-type: application/json");

require("db.php");

$sql = "
SELECT a.*, b.name  as 'writer_name', b.tier as 'writer_tier', b.id as 'writer_id' 
FROM `wiki_qna` as a
left outer join `wiki_user` as b
on a.writer_idx = b.idx order by a.created desc";

$data = fetchAll($con, $sql, []);

echo json_encode(array("data" => $data));