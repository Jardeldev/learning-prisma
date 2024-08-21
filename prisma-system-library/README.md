Exercício 1: Sistema de Gestão de Bibliotecas

Descrição:
Desenvolva um sistema de gerenciamento para uma biblioteca que inclui livros, autores e categorias.

Requisitos:

    Modelo de Dados:
        Book (Livro): id, title, authorId, categoryId, publishedDate
        Author (Autor): id, name, birthDate
        Category (Categoria): id, name
    Relacionamentos:
        Um livro deve ter um autor e uma categoria.
        Um autor pode ter vários livros.
        Uma categoria pode ter vários livros.

Tarefas:

    Crie o esquema Prisma para os modelos Book, Author e Category.
    Escreva um script TypeScript que insira um livro com autor e categoria associados.
    Implemente uma função para buscar todos os livros de um autor específico e todas as categorias de livros.
    Considere como você lidaria com a exclusão de um autor que possui livros associados.