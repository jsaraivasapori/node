const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "Olá, mundo!",
  //       content: "Este é o meu primeiro post criado com a ajuda do Prisma ORM!",
  //       published: true,
  //     },
  //     {
  //       title: "Post 2",
  //       content: null,
  //     },
  //   ],
  // });
  await prisma.user.create({
    data: {
      name: "Isaac",
      email: "isaac@email.com",
      posts: {
        create: [
          {
            title: "Post 1",
            content: "Conteúdo do post 1",
            slug: "post-1",
          },
        ],
      },
    },
  });
  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  });

  console.log(allUsers, allUsers[0].posts);
}

main();
