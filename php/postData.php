<?php
// require_once("../php/database.php");
// require_once("../php/articles.php");

// Устанавливаем подключение к бд
define('MYSQL_SERVER', 'localhost');
define('MYSQL_USER', 'u1736914_default');
define('MYSQL_PASSWORD', 'wyD2vBV5K49PprPG');
define('MYSQL_DB', 'u1736914_default');

function db_connect()
{
  $link = mysqli_connect(MYSQL_SERVER, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB)
    or die("Error: " . mysqli_error($link));
  if (!mysqli_set_charset($link, "utf8")) {
    printf("Error: " . mysqli_error($link));
  }

  return $link;
}

// Функция занесения пользователя в бд
function articles_new($link, $userEmail)
{
  $userEmail = trim($userEmail);

  if ($userEmail == '')
    return false;

  $t = "INSERT INTO users (email, paymentDate) VALUES ('%s', '%s')";

  $today = date("Y-m-d");
  $query = sprintf(
    $t,
    mysqli_real_escape_string($link, $userEmail),
    mysqli_real_escape_string($link, $today)
  );

  echo $query;
  $result = mysqli_query($link, $query);

  if (!$result)
    die(mysqli_error($link));

  return true;
}

// Забираем айдишник пользователя
$email = $_POST['email'];
// создаем соединение
$link = db_connect();

// Заносим пользователя в бд
articles_new($link, $email);
