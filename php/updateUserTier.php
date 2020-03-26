<?php

header("content-type: application/json");

require("db.php");

$idx = $_GET['idx'];


// 25씩 exp 증가

$query1 = "SELECT * FROM `wiki_user` WHERE idx=?";
$result1 = fetch($con, $query1, [$idx]);

//var_dump($result1);

$user_exp = (int)$result1->exp;
$user_tier = (int)$result1->tier;
$sum = $user_exp + 50;

$is_add_exp = true;

if (200 <= $sum && $sum < 1000) {
    $user_tier = 1;
} else if (1000 <= $sum && $sum < 3000) {
    $user_tier = 2;
} else if (3000 <= $sum && $sum < 6000) {
    $user_tier = 3;
} else if (6000 <= $sum && $sum < 10000) {
    $user_tier = 4;
} else if (10000 <= $sum && $sum < 14000) {
    $user_tier = 5;
} else if (14000 <= $sum && $sum < 20000) {
    $user_tier = 6;
} else if (20000 <= $sum && $sum < 30000) {
    $user_tier = 7;
} else if (30000 <= $sum && $sum < 50000) {
    $user_tier = 8;
} else if (50000 <= $sum) {
    if ($user_tier == 9) {
        $is_add_exp = false;
    } else {
        $user_tier = 9;
    }
}


//echo $sum;

if ($is_add_exp) {
    $query2 = "UPDATE `wiki_user` SET `tier`=?,`exp`=? WHERE `idx`=?";
    $result2 = execsql($con, $query2, [$user_tier, $sum, $idx]);

    $query3 = "SELECT * FROM `wiki_user` WHERE idx=?";
    $result3 = fetch($con, $query3, [$idx]);

    $_SESSION["loginUser"] = $result3;

    echo json_encode(array("data" => $result3));
}

