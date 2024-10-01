let lista = document.getElementById('lista');
let adicionarButton = document.getElementById('adicionar');
let tarefas = document.getElementById('tarefas');

adicionarButton.addEventListener('click', adicionarTarefa)
lista.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const texto = lista.value;
    if (texto.trim() !== '') {
        const novaTarefa = document.createElement('li');
        novaTarefa.innerHTML = `${texto} <button class='excluir'>Excluir</button>`;
        tarefas.appendChild(novaTarefa);
        lista.value = '';
    }
}

tarefas.addEventListener('click', function (e) {
    if (e.target.classList.contains('excluir')) {
        e.target.parentElement.remove();
    }
});