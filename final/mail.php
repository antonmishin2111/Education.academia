<?php
//Принимаем постовые данные
$whatever=$_POST['whatever'];
$name=$_POST['name'];
$email=$_POST['email'];
$subjects=$_POST['subject'];
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
Subjects: ".htmlspecialchars($subjects)."<br />
Сообщение: ".htmlspecialchars($message);
// Отправляем письмо при помощи функции mail();
$headers = "From: testeducation.ru <antmixa@testeducation.ru>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
/*header('Location: thanks.html');*/
exit();
?>