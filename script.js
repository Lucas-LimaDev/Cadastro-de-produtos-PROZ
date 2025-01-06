
//VARIAVEIS
const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario');
const produtosCadastrados = document.getElementById('produtos-cadastrados');

  //FUNÇÃO
function cadastroProdutos (e){
    e.preventDefault()
    const nome = nomeProduto.value
    const valor = valorProduto.value
    const descricao = descricaoProduto.value
    const feedback = feedbackUsuario.value
    
     //CRIANDO O JSON
    const jsonBody = JSON.stringify({
        nome: nome,
        valor: valor,
        descricao: descricao,
        feedback: feedback
    })





   //CRIANDO O PRODUTO
fetch('https://httpbin.org/post',{
    method: 'POST',
    headers: {"content-Type": "application/json"},
   
    body: jsonBody
   })
   

   .then(res => res.json())
   .then(data => {
    console.log(data)

    //EXIBINDO O PRODUTO
    produtosCadastrados.innerHTML = `
    
    <p>Nome: ${data.json.nome}</p>
    <p>Valor: ${data.json.valor}</p>
    <p>Descricão: ${data.json.descricao}</p>
    <p>Feedback: ${data.json.feedback}</p>
    <h3>Produto</h3>
    `;
    //LIMPAR CAMPOS
    nomeProduto.value = '',
    valorProduto.value ='',
    descricaoProduto.value = '',
    feedbackUsuario.value = ''
    alert( 'Produto cadastrado com sucesso!')

    produtosCadastrados.prepend(produtosCadastrados.lastElementChild)

    
    
   })
     //EXIBINDO ERRO
  .catch((error) => {
    console.log(error)
    produtosCadastrados.innerHTML = 'Não foi possível gerar produto'
 
})

}

    //EVENTOS
btnEnviar.addEventListener('click', (e)=> {cadastroProdutos(e)})



