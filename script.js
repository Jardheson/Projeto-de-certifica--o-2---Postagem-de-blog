// 2.1 Seletores
const formPost = document.querySelector('#form-post');
const tituloInput = document.querySelector('#titulo');
const conteudoInput = document.querySelector('#conteudo');
const renderizadorTitulo = document.querySelector('#renderizador-titulo');
const renderizadorConteudo = document.querySelector('#renderizador-conteudo');

// 2.2 Adicionar evento de submit
formPost.addEventListener('submit', (e) => {
    // 2.3 Prevenir comportamento padrão
    e.preventDefault();

    // 2.4 Montar o objeto
    const data = {
        title: tituloInput.value,
        body: conteudoInput.value,
        userId: 1
    };

    // Configuração do fetch
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {
        // 2.3 (parte 2) Renderizar o retorno
        console.log('Sucesso:', json);
        
        renderizadorTitulo.innerHTML = json.title;
        renderizadorConteudo.innerHTML = json.body;

        // Feedback visual (opcional)
        alert('Post criado com sucesso! Confira abaixo.');
        
        // Limpar campos (opcional)
        tituloInput.value = '';
        conteudoInput.value = '';
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Erro ao enviar o post.');
    });
});
