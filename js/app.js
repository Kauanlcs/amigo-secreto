const amigos = [];

function adicionar( ) {
   const  nomeAmigito = document.getElementById("nome-amigo");
   const  nome = nomeAmigito.value.trim()
     if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        document.getElementById("nome-amigo").value = "";
         } else {
     alert("Por favor, digite um nome válido.");
     return; 
       }
      }
    function atualizarLista() {
        let lista = document.getElementById("lista-amigos");
        lista.innerHTML = "";

        for (let i = 0; i < amigos.length; i++) {
            lista.innerHTML += "<li>" + amigos[i] + "</li>";
        }
}
