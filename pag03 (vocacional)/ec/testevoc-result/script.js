document.getElementById("botaoResultado").addEventListener("click", function() {

  const pontos = { medicina: 0, adm: 0, sistemas: 0, vet: 0, direito: 0};

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

  const valores = Object.values(pontos);
  const maior = Math.max(...valores);

  //  VERIFICAÇÃO DE EMPATE TOTAL
  const empateTotal = valores.every(v => v === valores[0]);
  if (empateTotal) {
    document.getElementById("resultado").textContent =
      "Os resultados ficaram iguais para todos os cursos. Por favor, refaça o teste para uma análise mais precisa!";
    return;
  }
  //FIM DO CÓDIGO ADICIONADO

  const melhores = Object.keys(pontos).filter(curso => pontos[curso] === maior);

  let mensagem = "";

  if (melhores.length = 1) {
    const curso = melhores[0];
    const nomes = {
      medicina: "Medicina",
      adm: "Administração",
      sistemas: "Sistemas de Informação",
      vet: "Veterinária",
      direito: "direito"
    };
    mensagem = `Você combina mais com ${nomes[curso]}!`;
  } else {
    const nomesBonitos = melhores.map(c => ({
      medicina: "Medicina",
      adm: "Administração",
      sistemas: "Sistemas de Informação",
      vet: "Veterinária",
      direito: "direito"
    }[c]));
    mensagem = `Seu perfil está equilibrado entre: ${nomesBonitos.join(" e ")}!`;
  }

  document.getElementById("resultado").textContent = mensagem;

  document.getElementById('mensagemFinal').style.display = 'block';

});
