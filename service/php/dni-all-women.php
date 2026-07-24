<?php

$fixJson = fn($text) => str_replace("'", "\"", $text);

$getAllWomanData = fn() =>
	$fixJson(
		shell_exec(
			sprintf(
				"swipl -s \"%s\" -g \"forall(woman(N,I),format('~w,~w~n',[N,I]))\" -t halt | python3 \"%s\"",
				__DIR__ . "/../data-model/db.pl",
				__DIR__ . "/../service/python/process-prolog-answer.py"
			)
		)
	) ?? "";

return [
	"getAllWomanData" => $getAllWomanData
];