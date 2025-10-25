function convertToRoman(num) {
  const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let numRomano = "";  //string vazia
  for(let i=0; i<13; i++){
    while(num >= valores[i]){
      numRomano += romanos[i];  //adiciono a letra romana
      num -= valores[i];        //subtraio o numero;
    }

  }
 return numRomano;
}

convertToRoman(36);
Close
