<?php

header("Content-Type: application/json");

[
	"getAllWomanData" => $getAllWomanData
] = include __DIR__ . "/../../service/php/dni-all-women.php";

//$_GET contiene todas las variables enviadas desde el FrontEnd usando el método GET

$json = [
	"status" => true,
	"comment" => $_GET["example"],
	"persons" => json_decode($getAllWomanData())
];

echo json_encode($json);