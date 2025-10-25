function rot13(str) {
  let novaStr = "";
  for(let i=0; i<str.length; i++){
    let strNum = str.charCodeAt(i);   //transformo o caractere em numero (uma logica que eu teria em 'C')
    if(strNum >= 65 && strNum <= 90){ 
      let novoNum = strNum + 13;
      if(novoNum > 90){
        novoNum -= 26;
      } 
      novaStr += String.fromCharCode(novoNum); //passo de volta para caractere
    }else{
    novaStr += str[i];            //se nao for letra, eh espaco ou pontuacao
    }

  }
  return novaStr;
}
rot13("SERR PBQR PNZC");
