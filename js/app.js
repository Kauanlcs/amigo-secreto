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

function sortear() {
 console.log("Participantes:", amigos);
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para sortear.");
    return;
  }
  const sorteado = [];
  const resultado = [];

  for (const participante of amigos) {
    let amigoSecreto;
     
    do {
      const indice = Math.floor(Math.random() * amigos.length);
      amigoSecreto = amigos[indice];
    } while (sorteado.includes(amigoSecreto) || amigoSecreto === participante);

    sorteado.push(amigoSecreto);
    resultado.push(`${participante} -> ${amigoSecreto}`);
  }
  const listaSorteio = document.getElementById("lista-sorteio");
  listaSorteio.innerHTML = resultado.join("<br>");
}
