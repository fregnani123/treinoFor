
// const arg = process.argv.slice(2)
// const controller = require('./controller/controllers')


// let n1= parseFloat(arg[1]);
// let n2= parseFloat(arg[2]);
// let c = ''


// if(arg[0] === 'somar'){
//    c = controller.somar(n1,n2)
//    console.log(c) 
// }
// if (arg[0] === 'subtrair'){
//     c = controller.subtrair(n1,n2)
//     console.log(c) 
//  }

// const pessoas = [
//   { nome: "Alice", cidade: "Içara/SC" },
//   { nome: "Bob", cidade: "Criciúma/SC" },
//   { nome: "Carlos", cidade: "São Paulo/SP" },
//   { nome: "Diana", cidade: "Rio de Janeiro/RJ" },
//   { nome: "Eduardo", cidade: "Porto Alegre/RS" },
//   { nome: "Fernanda", cidade: "Curitiba/PR" },
//   { nome: "Gabriel", cidade: "Belo Horizonte/MG" },
//   { nome: "Helena", cidade: "Salvador/BA" },
//   { nome: "Isaac", cidade: "Recife/PE" },
//   { nome: "Julia", cidade: "Fortaleza/CE" }
// ];

// pessoas.push({nome:'Pedro',cidade:'Içara/SC'})

// console.log(pessoas)

//   function buscar() {
//     const nomeBusca = document.querySelector("#buscar").value;
//     const res = document.querySelector('#res');
//     if (!nomeBusca) {
//       res.innerHTML ='Digite um nome para buscar.';
//     } else {
//       const resultado = pessoas.filter(pessoa => pessoa.nome.toLowerCase().includes(nomeBusca.toLowerCase()));
//       if (resultado.length === 0) {
//         res.innerHTML='Nenhum resultado encontrado.';
//       } else {
//         console.log('Resultados encontrados:');
//         resultado.forEach(pessoa => res.innerHTML = `Nome: ${pessoa.nome}<br> Cidade: ${pessoa.cidade}`);
//       }
//     }
//   }


// // //   console.log(pessoas[2].nome); // 
  

const pessoas = [
  { nome: "Alice", cidade: "Içara/SC" },
  { nome: "Bob", cidade: "Criciúma/SC" },
  { nome: "Carlos", cidade: "São Paulo/SP" },
  { nome: "Diana", cidade: "Rio de Janeiro/RJ" },
  { nome: "Eduardo", cidade: "Porto Alegre/RS" },
  { nome: "Fernanda", cidade: "Curitiba/PR" },
  { nome: "Gabriel", cidade: "Belo Horizonte/MG" },
  { nome: "Helena", cidade: "Salvador/BA" },
  { nome: "Isaac", cidade: "Recife/PE" },
  { nome: "Julia", cidade: "Fortaleza/CE" }
];

function adicionarPessoa() {
  const nome = document.querySelector("#nome").value;
  const cidade = document.querySelector("#cidade").value;

  if (nome && cidade) {
    pessoas.push({ nome, cidade });
    console.log("Nova pessoa adicionada:", { nome, cidade });
  } else {
    console.log("Por favor, preencha todos os campos.");
  }
}

function buscar() {
  const nomeBusca = document.querySelector("#buscar").value;
  const res = document.querySelector('#res');

  if (!nomeBusca) {
    res.innerHTML = 'Digite um nome para buscar.';
  } else {
    const resultado = pessoas.filter(pessoa => pessoa.nome.toLowerCase().includes(nomeBusca.toLowerCase()));

    if (resultado.length === 0) {
      res.innerHTML = 'Nenhum resultado encontrado.';
    } else {
      res.innerHTML = ''; // Clear previous search results

      console.log('Resultados encontrados:');
      resultado.forEach(pessoa => {
        const div = document.createElement('div');
        div.innerHTML = `Nome: ${pessoa.nome}<br> Cidade: ${pessoa.cidade}`;
        res.appendChild(div);
      });
    }
  }
}

  
  