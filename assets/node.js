document.getElementById("learnMore").addEventListener("click", function() {
    alert("Obrigado por querer saber mais!");
});

document.getElementById("contactMe").addEventListener("click", function() {
    alert("Entre em contato através do meu e-mail: seuemail@exemplo.com");
});
function baixarCurriculo() {
    window.location.href = "https://drive.google.com/uc?export=download&id=1QjQ25i3nvMjlf5sRm1fd7CjnscSbCiyQ";
  }
  function abrirWhatsApp() {
    const numero = "+5541987828512";
    const mensagem = "Olá Ronald, gostaria de trabalhar com você!";
    const url = `https://wa.me/${numero.replace(/\D/g, "")}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }
    
  