const input = require("fs").readFileSync("stdin", "utf8");

let LINES = input.split("\n");

LINES.map(frase => {
  let palavras = frase.split(" ");

  let qtd_palavras = 0;
  let tamanho_palavra = 0;

  palavras.map(palavra => {
    if (palavra.trim() !== "") {
      let palavra_valida = true;

      for (let i in palavra)
        if (!isNaN(palavra[i]) || palavra[i] === ".") // se é um número ou tem . (ponto)
          palavra_valida = false;

      if (palavra_valida) {
        console.log(palavra);
        qtd_palavras++;
        tamanho_palavra += palavra.replace(".", "").length;
      }
    }
  });

  // if (qtd_palavras === 0 || tamanho_palavra === 0) console.log(250);
  // else {
  //   let media = tamanho_palavra / qtd_palavras;

  //   if (media <= 3) console.log(250);
  //   else if (media < 6) console.log(500);
  //   else console.log(1000);
  // }
});