<?php header("Content-Type: text/html; charset=utf-8");
$recaptcha  = $_POST['g-recaptcha-response'];

if (!empty($recaptcha)) {
  $recaptcha = $_REQUEST['g-recaptcha-response'];
  $secret = '6Lcf4SohAAAAAI0G4vjpFB_iSkA7Hj5UprRP3w7S';
  $ip = $_SERVER['REMOTE_ADDR'];
  $google_url = "https://www.google.com/recaptcha/api/siteverify";
  $url = $google_url . "?secret=" . $secret . "&response=" . $recaptcha . "&remoteip=" . $ip;
  $curl = curl_init();
  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($curl, CURLOPT_TIMEOUT, 10);
  curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0(Windows;U;WindowsNT6.1;en-US;rv:1.9.2.16)Gecko/20110319Firefox/3.6.16");
  $curlData = curl_exec($curl);
  curl_close($curl);
  $res = json_decode($curlData, true);
  //if($curlData['success']) {
  if ($res['success']) {
    $fMail =  'Почта: ' . $_POST["email"] . ' <br />';
    $fTitle =  'Заголовок: ' . $_POST["title"] . ' <br />';
    $fMessage =  'Сообщение: ' . $_POST["message"] . ' <br />';
    $AllInOne =  $fMail . $fTitle . $fMessage;
    $to = 'ketotoday@yandex.ru';
    $headers = "From:https://keto-day.ru <keto-day.ru>\nReply-to:ketotoday@yandex.ru\nContent-Type: text/html; charset=\"utf-8\"\n";
    if (mail($to, 'Сообщение от пользователя', $AllInOne, $headers)) {
      header('Refresh: 7; URL= https://keto-day.ru/contact.html');
      echo '
      <!DOCTYPE html>
      <html lang="ru">
      
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
        <link rel="stylesheet" href="css/index.css">
        <link rel="stylesheet" href="css/reset.css">
      
        <!-- Стили секций -->
        <link rel="stylesheet" href="css/answer.css">
      
        <!-- Шрифты -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet">
      
        
      
        <title>KETO-DAY</title>
      </head>
      
      <body>
        <section class="answer">
          <div class="answer_wrap">
            <h1>Ваше сообщение отправлено</h1>
            <h2>Скоро мы на него ответим</h2>
          </div>
        </section>
        
      </body>
      
      </html>';
    } else {
      header('Refresh: 7; URL= https://keto-day.ru/contact.html');
      echo '<!DOCTYPE html>
      <html lang="ru">
      
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
        <link rel="stylesheet" href="css/index.css">
        <link rel="stylesheet" href="css/reset.css">
      
        <!-- Стили секций -->
        <link rel="stylesheet" href="css/answer.css">
      
        <!-- Шрифты -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet">
      
        
      
        <title>KETO-DAY</title>
      </head>
      
      <body>
        <section class="answer">
          <div class="answer_wrap">
            <h1>Что-то пошло не так :(</h1>
            <h2>Попробуйте снова еще раз</h2>
          </div>
        </section>
        
      </body>
      
      </html>';
    }
  } else {
    header('Refresh: 7; URL= https://keto-day.ru/contact.html');
    echo '<!DOCTYPE html>
    <html lang="ru">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
      <link rel="stylesheet" href="css/index.css">
      <link rel="stylesheet" href="css/reset.css">
    
      <!-- Стили секций -->
      <link rel="stylesheet" href="css/answer.css">
    
      <!-- Шрифты -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    
      
    
      <title>KETO-DAY</title>
    </head>
    
    <body>
      <section class="answer">
        <div class="answer_wrap">
          <h1>Подтвердите, что вы не робот и попробуйте еще раз</h1>
        </div>
      </section>
      
    </body>
    
    </html>';
  }
} else {
  header('Refresh: 7; URL= https://keto-day.ru/contact.html');
  echo '<!DOCTYPE html>
  <html lang="ru">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/reset.css">
  
    <!-- Стили секций -->
    <link rel="stylesheet" href="css/answer.css">
  
    <!-- Шрифты -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet">
  
    
  
    <title>KETO-DAY</title>
  </head>
  
  <body>
    <section class="answer">
      <div class="answer_wrap">
        <h1>Поставьте галочку в поле "Я не робот" для отправки сообщения и попробуйте еще раз</h1>
      </div>
    </section>
    
  </body>
  
  </html>';
}
