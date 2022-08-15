<?php
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

$user_id_for_update = null;

function articles_send($link)
{
  $query = sprintf("SELECT * FROM users");
  if ($result = mysqli_query($link, $query)) {
    foreach ($result as $row) {
      $email = $row["id"];
      $paymentDate = $row["paymentDate"];

      $today = date("Y-m-d");
      $today = '2022-10-20';

      $date_diff = abs(strtotime($today) - strtotime($paymentDate));
      $days = floor($date_diff / 86400);

      if (true) {
        $fName = 'Почта: ' . $email . ' <br />';
        $fpaymentDate = 'День платежа: ' . $paymentDate . ' <br />';
        $ftoday = 'Сегодня: ' . $today . ' <br />';
        $fpaymentDateDiff = 'Разница между датой платежа и сегодняшней датой: ' . $days . ' дней. ' . ' <br />';
        $AllInOne =  $fName . $fpaymentDate . $ftoday . $fpaymentDateDiff;

        $to = 'aramil28022005@gmail.com';
        $headers = "From:KETO\nReply-to:aramil28022005@gmail.com\nContent-Type: text/html; charset=\"utf-8\"\n";
        mail($to, 'Проверка пользователя', $AllInOne, $headers);
        mysqli_close($link);
        return $email;
      }
    }
  } else {
    die(mysqli_error($link));
  }
  mysqli_close($link);
}

$link = db_connect();
$user_id_for_update = articles_send($link);

echo $user_id_for_update;
