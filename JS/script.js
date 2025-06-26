
function responder() {
  const pergunta = document.getElementById("pergunta").value.toLowerCase();
  const respostaDiv = document.getElementById("resposta");

  let resposta = "Desculpe, não entendi sua pergunta. Tente usar outras palavras.";

  if (pergunta.includes("acessar") || pergunta.includes("conteúdo")) {
    resposta = "Você pode acessar os conteúdos clicando no menu principal e escolhendo a área de interesse, como Plantio, Tecnologia ou Vendas.";
  } else if (pergunta.includes("gratuito") || pergunta.includes("pagar")) {
    resposta = "Sim! Todo o conteúdo disponível na plataforma é gratuito e voltado para o aprendizado dos agricultores.";
  } else if (pergunta.includes("cadastro")) {
    resposta = "Por enquanto, não é necessário cadastro. Basta acessar e aproveitar o conteúdo!";
  } else if (pergunta.includes("plantio")) {
    resposta = "A AgroTech oferece conteúdo sobre plantio manual, mecanizado, irrigado e de sequeiro.";
  } else if (pergunta.includes("cuidar") || pergunta.includes("plantação")) {
    resposta = "Temos materiais sobre preparo do solo, espaçamento, irrigação e colheita.";
  } else if (pergunta.includes("tecnologia")) {
    resposta = "A seção 'Tecnologia' mostra como usar drones, sensores, aplicativos e outras ferramentas no campo.";
  } else if (pergunta.includes("vender") || pergunta.includes("vitrine")) {
    resposta = "Use a seção 'Vitrine' para cadastrar seus produtos e vender direto ao consumidor.";
  } else if (pergunta.includes("rastreabilidade")) {
    resposta = "É a capacidade de mostrar a origem e qualidade do produto, aumentando a confiança dos clientes.";
  } else if (pergunta.includes("calculadora")) {
    resposta = "A calculadora permite simular lucros com base no custo de produção e no preço de venda.";
  } else if (pergunta.includes("offline") || pergunta.includes("sem internet")) {
    resposta = "A AgroTech funciona mesmo com pouca conexão. Ao abrir as páginas uma vez, você pode acessá-las offline depois.";
  } else if (pergunta.includes("sugerir") || pergunta.includes("melhoria")) {
    resposta = "Você pode enviar sugestões na seção 'Fale Conosco'.";
  } else if (pergunta.includes("quem criou") || pergunta.includes("criadores")) {
    resposta = "A plataforma foi criada por jovens desenvolvedores para ajudar agricultores com tecnologia acessível.";
  } else if (pergunta.includes("ajuda") || pergunta.includes("duvida")) {
    resposta = "Estou aqui para ajudar! Pergunte sobre plantio, tecnologia, vendas ou ferramentas.";
  }

  respostaDiv.innerText = resposta;
}
