<?php
require_once("../php/database.php");
require_once("../php/articles.php");

$id = $POST['id'];

$link = db_connect();

// ЗАНОСИМ ПОЛЬЗОВАТЕЛЯ В БД
if (true) {
  articles_new($link, $id, '2022-08-13');
}
