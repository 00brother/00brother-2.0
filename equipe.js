
/*
=========================================================
CADASTRO DA EQUIPE — 00BROTHER
=========================================================
Edite este arquivo para mudar nomes, funções, descrições e fotos.

FOTOS:
1. Coloque a foto dentro da pasta "assets".
2. Escreva o caminho no campo foto, por exemplo:
   foto: "assets/gabriel.jpg"

PESSOAS:
- pessoa: identificador usado no portfólio (não alterar sem alterar também projetos.js)
- nome: nome que aparece no site
- funcao: cargo/função da pessoa
- descricao: texto curto sobre a pessoa
- foto: caminho da foto dentro do projeto; deixe "" para usar as iniciais

Para adicionar alguém, copie um bloco inteiro e troque os dados.
=========================================================
*/
const equipe = [
  {
    pessoa: "gabriel",
    nome: "Gabriel",
    funcao: "Função a definir",
    descricao: "Adicione aqui uma apresentação curta do Gabriel.",
    foto: ""
  },
  {
    pessoa: "perola",
    nome: "Pérola",
    funcao: "Função a definir",
    descricao: "Adicione aqui uma apresentação curta da Pérola.",
    foto: ""
  },
  {
    pessoa: "hubert",
    nome: "Hubert",
    funcao: "Função a definir",
    descricao: "Adicione aqui uma apresentação curta do Hubert.",
    foto: ""
  }
];

function teamPhoto(person, className = "team-photo") {
  if (person.foto) {
    return `<img class="${className}" src="${person.foto}" alt="Foto de ${person.nome}" loading="lazy">`;
  }
  const initial = (person.nome || "?").trim().charAt(0).toUpperCase();
  return `<div class="${className} team-photo-placeholder" aria-label="Foto não cadastrada">${initial}</div>`;
}

function teamCard(person) {
  const file = `${person.pessoa}.html`;
  return `<article class="card team-card">
    ${teamPhoto(person)}
    <span class="tag">Equipe 00Brother</span>
    <h3>${person.nome}</h3>
    <strong class="team-role">${person.funcao || "Função a definir"}</strong>
    <p>${person.descricao || ""}</p>
    <a class="project-link" href="${file}">Ver portfólio →</a>
  </article>`;
}

function renderTeam(targetId) {
  const target = document.getElementById(targetId);
  if (target) target.innerHTML = equipe.map(teamCard).join("");
}

function renderProfile(personId) {
  const person = equipe.find(item => item.pessoa === personId);
  if (!person) return;
  const photo = document.getElementById("profile-photo");
  const name = document.getElementById("profile-name");
  const role = document.getElementById("profile-role");
  const description = document.getElementById("profile-description");
  if (photo) photo.innerHTML = teamPhoto(person, "profile-photo-image");
  if (name) name.textContent = person.nome;
  if (role) role.textContent = person.funcao || "Função a definir";
  if (description) description.textContent = person.descricao || "";
}
