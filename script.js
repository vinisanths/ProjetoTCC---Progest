function enviarEmail(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const mailtoLink = `mailto:consultoriaprogest9@gmail.com?subject=Contato de ${nome}&body=Nome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;
  window.location.href = mailtoLink;
}

// MENU RESPONSIVO
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("open");
});
