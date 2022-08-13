<?php
require_once("https://keto-day.ru/php/database.php");
require_once("https://keto-day.ru/php/articles.php");

$id = $POST['id'];

$link = db_connect();

// ЗАНОСИМ ПОЛЬЗОВАТЕЛЯ В БД
if (true) {
  articles_new($link, $id, '2022-08-13');
}
