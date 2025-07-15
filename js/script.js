// Delay de 2 segundos + redirecionamento
setTimeout(() => {
    window.location.href = "home.html";
  }, 2000);
  
  // Eventos de conexão
  function updateOnlineStatus() {
    console.log(navigator.onLine ? "Conexão restabelecida" : "Sem conexão de internet");
  }
  
  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
  
  