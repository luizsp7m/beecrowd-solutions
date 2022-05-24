const input = require("fs").readFileSync("stdin", "utf8");

let LINES = input.split("\r\n");

let i = 0;

while (Number(LINES[i]) !== 0) {
  let qtd_nomes = Number(LINES[i]);
  let x = 1;
  let nomes = [];
  let qtd_nome_maior = 0;
  let nomes_formatado = [];

  while (x <= qtd_nomes) {
    nomes.push(LINES[i + x]);
    x++;
  }

  nomes.map(nome => {
    if (nome.length > qtd_nome_maior)
      qtd_nome_maior = nome.length;
  });

  nomes.map(nome => {
    let nome_formatado = "";

    for (let i = 0; i < qtd_nome_maior - nome.length; i++)
      nome_formatado += " ";

    nome_formatado += nome;
    nomes_formatado.push(nome_formatado);
  });

  nomes_formatado.map(nome => console.log(nome));

  i = i + qtd_nomes + 1;
}