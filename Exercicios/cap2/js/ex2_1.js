//
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// Cria um ouvinte de evento, acionado quando o botão do submit for clicado

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value  // obtém o nome digitado no form
    resp.innerHTML = `Olá ${nome}` // Exibe a resposta do programa
    e.preventDefault()   // evita envio ao form
})