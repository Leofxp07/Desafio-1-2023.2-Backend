
function palindrome(str) {
  const regex = /[\W_]/g;
  const string = str.toLowerCase().replace(regex, "");       //converto todos para minusculos e deixo tudo junto sem espacos ou pobtuacoes
  let esquerda = 0;
  let direita = string.length - 1;

  while (esquerda < direita) {
    if (string[esquerda] !== string[direita]) {
      return false;
    }
    esquerda++;
    direita--;
  }

  return true;
}

palindrome("eye");
