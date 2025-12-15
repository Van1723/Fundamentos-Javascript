


const user = {
  Nome: 'Vanessa',
  Idade: 27,
  Cidade: 'Prudente',
};

nome = user.Nome;
idade = user.Idade;
cidade = user.Cidade;

//  document.getElementById("user_destructuring").innerText =
//   JSON.stringify(nome,null, 2);
//   document.getElementById("user_destructuring").innerText =
//   JSON.stringify(idade,null, 2);
//   document.getElementById("user_destructuring").innerText =
//   JSON.stringify(cidade,null, 2);


  const div = document.getElementById("user_destructuring");

 const p = document.createElement("p");
 p.textContent = `${nome} - ${cidade}`;

 div.appendChild(p);


//   document.getElementById("user_destructuring").innerText =
//   JSON.stringify(user.Idade,null, 4);
