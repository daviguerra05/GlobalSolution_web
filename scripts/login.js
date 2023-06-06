document.getElementById("loginButton").addEventListener("click", function () {


    let usuarioInput = document.getElementById("usuario").value
    let senhaInput = document.getElementById("senha").value


    if (usuarioInput === "Admin" && senhaInput === "123456") {
        alert("Seja Bem-Vindo Admin!")

        const url = "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021";

        window.location.href = url;
    } else {

        alert("senha ou login invalidos")

        let usuarioInput = document.getElementById("usuario").value = ""
        let senhaInput = document.getElementById("senha").value = ""
    }
})







