let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "sim"
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem:"dfdfdfdfadfad",
    nota: "O último MacPatinhas",
    recorrente: "sim"
  };
 
  for(let key in info, info2){ 
    console.log(info[key] + " e " + info2[key])
  }