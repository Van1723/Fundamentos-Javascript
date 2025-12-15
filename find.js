// treinar .find() e objetos





function selection_product()
{ 
    const input_selection = document.getElementById('selection').value;
    inputSelect = Number(input_selection);
    const produtos = 
   [
  { id: 0, nome: 'Café', preco: 10 },
  { id: 1, nome: 'Leite', preco: 7 },
  { id: 2, nome: 'Pão', preco: 3},
  ];
    
  const produto_encontrado = produtos.find(
  produto => produto.id === inputSelect
 );
 
 //   console.log(produto_encontrado);

    // 


    if (produto_encontrado) {
      document.getElementById("product").innerText =
  JSON.stringify(produto_encontrado,null, 2);
 } else {
  console.log('Produto não encontrado');
 }

} 

