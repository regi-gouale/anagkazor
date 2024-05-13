import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // TODO : Add seed data here
};

main()
  .then(async () => {
    prisma.$disconnect();
  })
  .catch(async (e) => {
    if (e instanceof Error) {
      console.error(e.message);
    }
    prisma.$disconnect();
    process.exit(1);
  });
