<?php
//Принимаем постовые данные
$whatever=$_POST['whatever'];
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];
//Тут указываем на какой ящик посылать письмо
$to = "toshamischin@yandex.ru";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Заявка с сообщением";
// Сообщение письма
$message = "
Форма с которой пришло: ".htmlspecialchars($whatever)."<br />
Имя пользователя: ".htmlspecialchars($name)."<br />
Email: ".htmlspecialchars($email)."<br />
Сообщение: ".htmlspecialchars($message);
// Отправляем письмо при помощи функции mail();
$headers = "From: workfirst.ws <admin@workfirst.ws>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
header('Location: thanks.html');
exit();
?>