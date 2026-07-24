<?php

header("Content-Type: application/json");

[
	"getDatePHP" => $getDatePHP,
	"getDatePython" => $getDatePython,
	"getDateBash" => $getDateBash
] = include __DIR__ . "/../../service/php/date-time.php";

$json = [
	"status" => false,
	"php" => $getDatePHP(),
	"python" => $getDatePython(),
	"haskell" => false,
	"lisp" => false,
	"linux" => $getDateBash()
];

echo json_encode($json);