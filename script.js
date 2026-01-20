const formPost = document.querySelector('#form-post');
const tituloInput = document.querySelector('#titulo');
const conteudoInput = document.querySelector('#conteudo');
const renderizadorTitulo = document.querySelector('#renderizador-titulo');
const renderizadorConteudo = document.querySelector('#renderizador-conteudo');

formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        title: tituloInput.value,
        body: conteudoInput.value,
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {
        console.log('Sucesso:', json);
        
        renderizadorTitulo.innerHTML = json.title;
        renderizadorConteudo.innerHTML = json.body;

        alert('Post criado com sucesso! Confira abaixo.');
        
        tituloInput.value = '';
        conteudoInput.value = '';
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Erro ao enviar o post.');
    });
});
