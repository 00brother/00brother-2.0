/*
PAINEL SIMPLES DE PROJETOS — 00BROTHER
Para adicionar um projeto, copie o modelo abaixo e cole como um novo item entre [ e ].
Não apague as aspas nem as vírgulas.

CAMPOS:
pessoa: "gabriel", "perola" ou "hubert"
titulo: nome que o cliente verá
descricao: resumo curto e profissional
imagem: caminho da imagem (ex.: "assets/site-loja.jpg"); use "" se não houver imagem
link: endereço do projeto publicado; use "" se ainda não tiver
entregue: true se também deve aparecer em "Sites entregues"; false se não

EXEMPLO:
{ pessoa:"gabriel", titulo:"Site da Loja", descricao:"Site institucional responsivo para apresentar a marca e seus serviços.", imagem:"assets/site-loja.jpg", link:"https://exemplo.com", entregue:true },
*/
const projetos = [
  // Adicione os projetos reais abaixo. Os exemplos acima são apenas instruções.
];

function projectCard(p){
  const img = p.imagem ? `<img class="project-image" src="${p.imagem}" alt="Prévia do projeto ${p.titulo}" loading="lazy">` : `<div class="project-image" aria-hidden="true"></div>`;
  const link = p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener noreferrer">Visitar projeto ↗</a>` : "";
  return `<article class="card project-card">${img}<div class="project-content"><span class="tag">Projeto 00Brother</span><h3>${p.titulo}</h3><p>${p.descricao}</p>${link}</div></article>`;
}
