<?php

$getDatePHP = fn() => date("Y-m-d");
$getDatePython = fn() => date("Y-m-d");
$getDateBash = fn() => date("Y-m-d");

return [
	"getDatePHP" => $getDatePHP,
	"getDatePython" => $getDatePython,
	"getDateBash" => $getDateBash
];