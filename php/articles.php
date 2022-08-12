<?php
function articles_get($link, $id_article)
{
  $query = sprintf("SELECT * FROM users WHERE  id='$id_article'", (string)$id_article);
  // var_dump($query);
  $result = mysqli_query($link, $query);

  if (!$result) {
    die(mysqli_error($link));
  }
  $article = mysqli_fetch_assoc($result);

  return $article;
}

function articles_new($link, $userId, $paymentDate)
{
  $userId = trim($userId);
  $paymentDate = trim($paymentDate);

  if ($userId == '')
    return false;


  $t = "INSERT INTO users (id, paymentDate) VALUES ('%s', '%s')";

  $query = sprintf(
    $t,
    mysqli_real_escape_string($link, $userId),
    mysqli_real_escape_string($link, $paymentDate)
  );

  $result = mysqli_query($link, $query);

  if (!$result)
    die(mysqli_error($link));

  return true;
}
