"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Inserir dados
        const author = yield prisma.author.create({
            data: {
                name: 'J.K. Rowling',
                birthDate: new Date('1965-07-31'),
                books: {
                    create: [
                        {
                            title: 'Harry Potter and the Philosopher\'s Stone',
                            publishedDate: new Date('1997-06-26'),
                            // categoryId não é obrigatório
                        },
                        {
                            title: 'Harry Potter and the Chamber of Secrets',
                            publishedDate: new Date('1998-07-05'),
                            // categoryId não é obrigatório
                        },
                    ],
                },
            },
        });
        // Buscar livros de um autor
        const booksByAuthor = yield prisma.book.findMany({
            where: {
                authorId: author.id,
            },
            include: {
                author: true,
            },
        });
        console.log(booksByAuthor);
    });
}
main().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
