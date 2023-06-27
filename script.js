function setTheme(theme) {

  const link = document.getElementsByClassName('cor')
  const button = document.getElementById('nome');
  
  
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    // Salvar a preferência do usuário no armazenamento local
    localStorage.setItem("theme", "dark");
    button.textContent = 'Modo Escuro';
    for (let index = 0; index < link.length; index++) {
      link[index].style.color = 'white';
      
    }
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    button.textContent = 'Modo Claro';
    for (let index = 0; index < link.length; index++) {
      link[index].style.color = 'black';
      
    }
  }
}

function toggleTheme() {
  var currentTheme = localStorage.getItem("theme") || "light";
  var newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
}

// Verificar a preferência do usuário ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  var currentTheme = localStorage.getItem("theme") || "light";
  setTheme(currentTheme);
});

function toggleTheme() {
  var currentTheme = localStorage.getItem("theme") || "light";
  var newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);

  // Enviar uma mensagem para o outro frame informando a mudança de tema
  var otherFrame = document.getElementById("acao-frame").contentWindow;
  otherFrame.postMessage({ theme: newTheme }, "*");
}

document.addEventListener("DOMContentLoaded", function () {
  var currentTheme = localStorage.getItem("theme") || "light";
  setTheme(currentTheme);
});