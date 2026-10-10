const botao = document.querySelector(".btn1");

if (localStorage.getItem("tema") === "claro") {
    document.body.classList.add("tema-claro");
}

function atualizarBotao() {
    const temaClaro = document.body.classList.contains("tema-claro");
    botao.textContent = temaClaro ? "Modo escuro" : "Modo claro";
}

atualizarBotao();

botao.addEventListener("click", function () {
    document.body.classList.toggle("tema-claro");

    const temaClaro = document.body.classList.contains("tema-claro");
    localStorage.setItem("tema", temaClaro ? "claro" : "escuro");

    atualizarBotao();
});