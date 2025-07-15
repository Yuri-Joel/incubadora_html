<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // 📨 Emails
    $adminEmail = "no-reply@incubadoraiemp.ao"; // Email do admin
    $from = "no-reply@incubadoraiemp.ao"; // Deve ser do seu domínio real

    // 📦 Dados recebidos
    $company = htmlspecialchars($_POST["companyName"]);
    $segment = htmlspecialchars($_POST["segment"]);
    $name = htmlspecialchars($_POST["contactName"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $website = htmlspecialchars($_POST["website"]);
    $description = htmlspecialchars($_POST["description"]);
    $stage = htmlspecialchars($_POST["stage"]);

    // 📄 HTML do email para o admin
    $adminMessage = "
    <html>
    <head><meta charset='UTF-8'></head>
    <body>
      <div style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;'>
        <div style='background: #fff; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto;'>
          <img src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WXM3qTvfQi3Ae3g25dbnkHON1N2wy7.png' style='max-width:150px; display:block; margin:auto;' />
          <h2>Nova Inscrição Recebida</h2>
          <p><strong>Empresa:</strong> {$company}</p>
          <p><strong>Segmento:</strong> {$segment}</p>
          <p><strong>Responsável:</strong> {$name}</p>
          <p><strong>Email:</strong> {$email}</p>
          <p><strong>Telefone:</strong> {$phone}</p>
          <p><strong>Website:</strong> {$website}</p>
          <p><strong>Estágio:</strong> {$stage}</p>
          <p><strong>Descrição:</strong> {$description}</p>
          <p style='font-size:12px; color:#777'>&copy; 2025 IEMP - Incubadoras de Empresas</p>
        </div>
      </div>
    </body>
    </html>
    ";

    // 📄 HTML de confirmação para o usuário
    $userMessage = "
    <html>
    <head><meta charset='UTF-8'></head>
    <body>
      <div style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;'>
        <div style='background: #fff; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto;'>
          <img src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WXM3qTvfQi3Ae3g25dbnkHON1N2wy7.png' style='max-width:150px; display:block; margin:auto;' />
          <h2>Inscrição Recebida</h2>
          <p><strong>Responsável:</strong> {$name}</p>
          <p><strong>Email:</strong> {$email}</p>
          <p><strong>Telefone:</strong> {$phone}</p>
          <p>Em breve entraremos em contacto.</p>
          <p style='font-size:12px; color:#777'>&copy; 2025 IEMP - Incubadoras de Empresas</p>
        </div>
      </div>
    </body>
    </html>
    ";

    // Headers para email HTML
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html; charset=UTF-8\r\n";
    $headers .= "From: {$from}\r\n";

    // Enviar para admin
    $sentAdmin = mail($adminEmail, "Nova inscrição: {$company}", $adminMessage, $headers);
    // Enviar confirmação para usuário
    $sentUser = mail($email, "Inscrição recebida - IEMP", $userMessage, $headers);

    if ($sentAdmin && $sentUser) {
        echo "ok";
    } else {
        http_response_code(500);
        echo "Erro ao enviar o e-mail.";
    }
} else {
    http_response_code(403);
    echo "Acesso negado.";
}
