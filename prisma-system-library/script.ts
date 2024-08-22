import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Inserir dados
  const author = await prisma.author.create({
    data: {
      name: 'J.K. Rowling',
      birthDate: new Date('1965-07-31'),
      books: {
        create: [
          {
            title: 'Harry Potter and the Philosopher\'s Stone',
            publishedDate: new Date('1997-06-26'),
          },
          {
            title: 'Harry Potter and the Chamber of Secrets',
            publishedDate: new Date('1998-07-05'),
          },
        ],
      },
    },
  });

  // Buscar livros de um autor
  const booksByAuthor = await prisma.book.findMany({
    where: {
      authorId: author.id,
    },
    include: {
      author: true,
    },
  });

  console.log(booksByAuthor);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
