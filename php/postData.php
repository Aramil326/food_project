<?php
require_once("database.php");
require_once("articles.php");
$id = $_POST['id'];
$paymentDate = $_POST['paymentDate'];

$link = db_connect();

// ЗАНОСИМ ПОЛЬЗОВАТЕЛЯ В БД
if (true) {
  articles_new($link, $id, $paymentDate);
}
