<?php

$env = fn(string $filename = "env"): array =>
    array_reduce(
        file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES),
        function ($carry, $line) {
            if ($line[0] != "#" && str_contains($line, "=")){
                [$key, $value] = explode("=", $line, 2);
                $carry[$key] = $value;
            };
        return $carry;
        },
        []
    );

return ["env" => $env];