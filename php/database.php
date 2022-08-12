<?php
define('MYSQL_SERVER', 'u1736914_default');
// define('MYSQL_SERVER', 'localhost');
define('MYSQL_USER', 'root');
define('MYSQL_PASSWORD', 'wyD2vBV5K49PprPG');
// define('MYSQL_PASSWORD', '');
define('MYSQL_DB', 'users');

function db_connect()
{
  $link = mysqli_connect(MYSQL_SERVER, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB)
    or die("Error: " . mysqli_error($link));
  if (!mysqli_set_charset($link, "utf8")) {
    printf("Error: " . mysqli_error($link));
  }

  return $link;
}
