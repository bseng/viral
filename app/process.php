<?php
@extract($_POST);
$name = stripslashes($name);
$phone = stripslashes($phone);
$email = stripslashes($email);
$bookdate = stripslashes($bookdate);
$booktime = stripslashes($booktime);
$question = stripslashes($question);
$number = stripslashes($number);
$title = stripslashes($title);
$body = "Reservation Details:
  title: $title
  name: $name
  phone: $phone
  e-mail: $email
  number of people: $number
  book date: $bookdate
  book time: $booktime
  question: $question
  
  ";
mail('reservation@viral-fusion.com',"Reservation",$body,"From: $name <$email>");
?>
