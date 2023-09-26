document.addEventListener('DOMContentLoaded', () => {
    const userTable = document.getElementById('MeuBancoDeDados');

    // Função para buscar usuários
    function fetchUsers() {
        fetch('/users')
            .then((response) => response.json())
            .then((data) => {
                userTable.innerHTML = '';
                data.forEach((user) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.nome}</td>
                        <td>${user.telefone}</td>
                    `;
                    userTable.appendChild(row);
                });
            })
            .catch((error) => console.error('Erro ao buscar usuários:', error));
    }

    // Chame a função para buscar usuários quando a página carregar
    fetchUsers();
});
