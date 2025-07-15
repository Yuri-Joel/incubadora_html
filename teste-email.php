<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$to = "yurijooel04@gmail.com"; // ou um e-mail do domínio
$subject = "Teste de envio";
$message = "Funcionou!";
$headers = "From: no-reply@incubadoraiemp.ao\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo "Email enviado com sucesso.";
} else {
    echo "Erro ao enviar email.";
}
