//Usuários e tecnologias
console.log('**************Usuários e tecnologias**************')


const usuarioTecnologias = [
    {
        nome: 'Debora',
        tecnologias: ['JasvaScript', 'Java']
    },
    {
        nome: 'Mario',
        tecnologias: ['JavaScript', 'CSS' ]
    },
    {
        nome: 'Mike',
        tecnologias: ['Java', 'HTML']
    }
]

function listaUsuario(usuario){
    for(let i =0; i < usuario.length;i++){
        console.log(`${usuario[i].nome} tabrabalha com ${usuario[i].tecnologias}`)
    }
}

listaUsuario(usuarioTecnologias);

// Busca por tecnologias
console.log('**************Busca por tecnologias**************')


function checarSeUsuarioUsaCSS(usuario){
    for(let j =0; j < usuario.tecnologias.length ;j++){
        if(usuario.tecnologias[j] == 'CSS'){
            return true
        }
    }
    
}

for(let i = 0; i < usuarioTecnologias.length;i++){
    const usuarioTrabalhaComCSS = checarSeUsuarioUsaCSS(usuarioTecnologias[i]);

    if(usuarioTrabalhaComCSS){
        console.log(` O ${usuarioTecnologias[i].nome} trabalha com CSS`);
    }
}



// Soma de despesas e receitas

console.log('**************Soma de despesas e receitas**************')

const usuariosReceitas = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

for(let i = 0; i < usuariosReceitas.length;i++){
    const saldo = calculoSaldo(usuariosReceitas[i].receitas, usuariosReceitas[i].despesas);
    console.log(`${usuariosReceitas[i].nome} possui saldo ${checaSaldo(saldo)} de ${saldo.toFixed(1)}`)
    
}

function checaSaldo(saldo){
    if(saldo<0){
        return 'NEGATIVO'
    }else{
        return 'POSITIVO'
    }
}
function calculoSaldo(receitas,despesas){
    const saldo = somaNumeros(receitas) - somaNumeros(despesas);
    return saldo;
}

function somaNumeros(numeros) {
    let soma = 0;
    for(let i = 0;i < numeros.length; i++){
        soma += numeros[i]; 
    }
    return soma;
  }