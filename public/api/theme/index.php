<?php

header("Content-Type: application/json");
$PATH = __DIR__."/../../../";

[
    "env" => $env
] = include $PATH."service/php/env.php";

$json = [
    "status" => true,
    "env" => $env($PATH.".env")
];

echo json_encode($json);