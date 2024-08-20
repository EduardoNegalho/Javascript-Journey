/*
Crie um programa de linha de comando simples que funcione como um gerenciador de tarefas.

Funcionalidades:

Adicionar uma tarefa.
Remover uma tarefa pelo id.
Listar todas as tarefas.
Marcar uma tarefa como concluída.
*/

const tasks = [];

function listTasks() {
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task.descricao}`);
    })
}

function addATask(descricao) {
    const task = {
        id: tasks.length + 1,
        descricao,
        situacao: 'Pendente'
    };

    tasks.push(task);
}

function deleteTaskById(id) {
    if (typeof id !== 'number' || id < 1) {
        console.log('O id precisa ser um número positivo');
    }

    const index = tasks.findIndex(task => task.id === id);

    if (index !== -1) {
        tasks.splice(index, 1);
    } else {
        console.log('Tarefa não encontrada!');
    }
}

function markTaskCompleted(indice) {
    if (typeof indice !== 'number') console.log('O índice precisa ser um númeral');
    if (indice < 1) console.log('O índice precisa ser um número inteiro a partir do 1!');

    let found = false;
    tasks.find(task => {
        if (task.id === indice) {
            task.situacao = 'Concluída';
            found = true;
        }
    })

    if (!found) {
        console.log('Tarefa não encontrada!');
    }
}