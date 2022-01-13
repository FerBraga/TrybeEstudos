const test = (escopo) => {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if),';
      console.log(`${ifScope}  ótimo, fui utilizada no escopo !'`);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  test(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const alteraOrdem = oddsAndEvens.sort(function(a, b){return a-b});

  console.log(`Os números ${alteraOrdem} , se encontram ordenados de forma crescente`); 


  