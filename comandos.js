const usuarios = [
    { nome: 'Felipe', senha: '1234', role: 'admin' },
    { nome: 'João', senha: '4321', role: 'usuario' }
];

let form = document.querySelector('#loginForm');  // Usando id 'loginForm'
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio automático
    validarUsuario();
});

function validarUsuario() {
    const nomeUsuario = document.querySelector('#username').value.trim();  // Remover espaços
    const senhaUsuario = document.querySelector('#password').value.trim(); // Remover espaços

    // Buscar usuário válido
    const encontrado = usuarios.find(usuario => usuario.nome === nomeUsuario && usuario.senha === senhaUsuario);
    
    if (encontrado) {
        alert(`Acesso permitido! Bem-vindo ${nomeUsuario}`);

        // Limpar os campos após login bem-sucedido
        document.querySelector('#username').value = '';
        document.querySelector('#password').value = '';

        window.location.href = 'pag.html';
    } else {
        alert('Usuário não identificado!');

        // Destacar os campos com erro
        document.querySelector('#username').style.borderColor = 'red';
        document.querySelector('#password').style.borderColor = 'red';

        // Limpar os campos após erro (opcional, para o usuário tentar novamente)
        document.querySelector('#username').value = '';
        document.querySelector('#password').value = '';
    }
}
