<?php
require_once("database.php");
require_once("articles.php");

$link = db_connect();

// ПОЛУЧАЕМ ПОЛЬЗОВАТЕЛЯ ИЗ БД
$article = articles_get($link, 'qwerty@amil.ru');

return $article;
