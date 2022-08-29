<?php
// Устанавливаем подключение к бд
define('MYSQL_SERVER', 'localhost');
define('MYSQL_USER', 'u1736914_default');
define('MYSQL_PASSWORD', 'wyD2vBV5K49PprPG');
define('MYSQL_DB', 'u1736914_default');

// Подключение
function db_connect()
{
  $link = mysqli_connect(MYSQL_SERVER, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB)
    or die("Error: " . mysqli_error($link));
  if (!mysqli_set_charset($link, "utf8")) {
    printf("Error: " . mysqli_error($link));
  }
  return $link;
}

// Функция изменения записи
function article_edit($link, $id, $mail_)
{
  $id = (int)$id;
  $mail_yes = 'Yes';
  $sql = "UPDATE users SET $mail_='%s' WHERE id = '%d'";


  $query = sprintf(
    $sql,
    mysqli_real_escape_string($link, $mail_yes),
    $id
  );

  $result = mysqli_query($link, $query);

  if (!$result)
    die(mysqli_error($link));

  return mysqli_affected_rows($link);
}

// проверка + отправка сообщения
function articles_send($link)
{
  $query = sprintf("SELECT * FROM users");
  if ($result = mysqli_query($link, $query)) {
    foreach ($result as $row) {
      $id = $row["id"];
      $email = $row["email"];
      $paymentDate = $row["paymentDate"];

      $today = date("Y-m-d");
      $today = '2022-08-22';

      $date_diff = abs(strtotime($today) - strtotime($paymentDate));
      $days_passed = floor($date_diff / 86400);

      for ($i = 7; $i <= 175; $i = $i + 7) {
        if ($days_passed == $i && !$row["mail_" . $i / 7]) {
          $mail_ = "mail_" . $i / 7;
          $fid = 'ID: ' . $id . ' <br />';
          $fName = 'Почта: ' . $email . ' <br />';
          $fpaymentDate = 'День платежа: ' . $paymentDate . ' <br />';
          $ftoday = 'Сегодня: ' . $today . ' <br />';
          $fpaymentDateDiff = 'Разница между датой платежа и сегодняшней датой: ' . $days_passed . ' дней. ' . ' <br />';
          $fmail_ = 'mail_: ' . $mail_ . ' <br />';
          $AllInOne = $fid . $fName . $fpaymentDate . $ftoday . $fpaymentDateDiff . $fmail_;

          $to = 'aramil28022005@gmail.com';
          $headers = "From:KETO-DAY <ketotoday@yandex.ru>\nReply-to:aramil28022005@gmail.com\nContent-Type: text/html; charset=\"utf-8\"\n";
          mail($to, 'План диеты', $AllInOne, $headers);

          article_edit($link, $id, $mail_);
        }
      }
    }
    mysqli_close($link);
    return $email;
  } else {
    die(mysqli_error($link));
  }
  mysqli_close($link);
}

$link = db_connect();
$user_id_for_update = articles_send($link);
