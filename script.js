const botaoTema = document.getElementById("temaBtn");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

function respostaCorreta(){
    document.getElementById("resultado").innerHTML =
    "✅ Correto! A agrofloresta ajuda o meio ambiente.";
}

function respostaErrada(){
    document.getElementById("resultado").innerHTML =
    "❌ Errado! O desmatamento prejudica a natureza.";
}