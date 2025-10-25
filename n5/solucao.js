function checkCashRegister(preco, pagamento, dinheiro) {
  const valores = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  };
  let trocoCentavos = Math.round((pagamento - preco)*100);
  let totalCaixa = 0
  for(let [nome, quantia] of dinheiro){
    totalCaixa += Math.round(quantia * 100);
  } 
  if(totalCaixa < trocoCentavos){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }else if(totalCaixa === trocoCentavos){
    return {status: "CLOSED", change: dinheiro};
  }
  let trocoDar = [];
  for(let i=dinheiro.length - 1; i>=0; i--){
    let nomeUnidade = dinheiro[i][0]; 
    let valorUnidade = valores[nomeUnidade];
    let quantiaNaGaveta = Math.round(dinheiro[i][1] * 100); 
    let quantiaRetornar = 0;
    while (trocoCentavos >= valorUnidade && quantiaNaGaveta > 0) {
      trocoCentavos -= valorUnidade;
      quantiaNaGaveta -= valorUnidade; 
      quantiaRetornar += valorUnidade; 
    }
    if (quantiaRetornar > 0) {
      trocoDar.push([nomeUnidade, quantiaRetornar / 100]);
    }
  }
  if (trocoCentavos > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }else{
      return {status: "OPEN", change: trocoDar};
  }

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
Close
