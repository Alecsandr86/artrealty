<?php

$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$msg = strip_tags($_POST['msg']);

$toaddress = "juliad012@mail.ru";
$subject = 'Обратная связь';
$mailcontent = "<p><b>Имя:</b> $name<br>
				<b>Email:</b> $email<br>
				<b>Сообщение:</b> $msg<br>";
$from_name = "ArtRealty ";
$from_email = "noreply@mysite.ru";

$headers = "MIME-Version: 1.0\r\n";
$headers.= "From: =?utf-8?B?".base64_encode($from_name)."?= <".$from_email.">\r\n";
$headers .= "Content-type: text/html; charset=\"utf-8\"";

mail( $toaddress, "=?utf-8?B?".base64_encode($subject)."?=", $mailcontent, $headers );

echo "<span>Сообщение отправлено! Спасибо! Мы ответим как можно скорее!</span>";

?>