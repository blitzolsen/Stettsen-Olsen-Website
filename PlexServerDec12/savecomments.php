<?php
$q = $_REQUEST["q"];
$file = 'comments.txt';
file_put_contents($file, $q);
?>