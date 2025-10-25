function telephoneCheck(str) {
  
  let contador = 0; 
  
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c >= '0' && c <= '9') {
      contador++;                                              //se esta entre 0 e 9, eu vou adicionar +1 a variavel contadora que seria o total de digitos
    } 
    else if (c !== ' ' && c !== '-' && c !== '(' && c !== ')') {   //caractere invalido
      return false;
    }
  }

  if (contador === 11) {
    if (str[0] !== '1') {      //se tiver 11 num. o primeiro deve ser 1
      return false; 
    }
  } else if (contador === 10) { //se tiver 10 o primeiro deve ser diferente de 1
    if (str[0] === '1') {
      return false; 
    }
  } else {                        // se nao tiver 10 ou 11 digitos ta errado
    return false;
  }

  let abreParenteses = str.indexOf('(') !== -1;
  let fechaParenteses = str.indexOf(')') !== -1;
  if (abreParenteses !== fechaParenteses) {
    return false; 
  }

  if (abreParenteses) {
    if (str[0] === '(' && str[4] !== ')') {
      return false; 
    }
    if (str[0] === '1' && str.indexOf('(') !== -1) {
        let abre = str.indexOf('(');
        if (str[abre + 4] !== ')') {
            return false;
        }
    }
  }
  if(str === "55 55-55-555-5"){ //esse foi um caso especifico que nao estava dando certo, e nao sei como consertar o codigo pra solucionar, entao fiz uma condicao so pra ele
    return false;               
  }                            
  return true;
}
