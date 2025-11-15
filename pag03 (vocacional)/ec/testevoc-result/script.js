document.getElementById("botaoResultado").addEventListener("click", function() {

  const pontos = { medicina: 0, adm: 0, sistemas: 0, vet: 0 };

  const perguntas = document.querySelectorAll(".pergunta");

  for (let pergunta of perguntas) {
    const curso = pergunta.dataset.curso;
    const resposta = pergunta.querySelector("input[type='radio']:checked");

    if (!resposta) {
      document.getElementById("resultado").textContent =
        "Por favor, responda todas as perguntas!";
      return;
    }

    pontos[curso] += Number(resposta.value);
  }

  const maior = Math.max(...Object.values(pontos));

  const melhores = Object.keys(pontos).filter(curso => pontos[curso] === maior);

  let mensagem = "";

  if (melhores.length === 1) {
    const curso = melhores[0];
    const nomes = {
      medicina: "Medicina",
      adm: "Administração",
      sistemas: "Sistemas de Informação",
      vet: "Veterinária"
    };
    mensagem = `Você combina mais com ${nomes[curso]}!`;
  } else {
    const nomesBonitos = melhores.map(c => ({
      medicina: "Medicina",
      adm: "Administração",
      sistemas: "Sistemas de Informação",
      vet: "Veterinária"
    }[c]));
    mensagem = `Seu perfil está equilibrado entre: ${nomesBonitos.join(" e ")}!`;
  }

  document.getElementById("resultado").textContent = mensagem;
});
 