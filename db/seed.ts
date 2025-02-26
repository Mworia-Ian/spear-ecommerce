import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();

  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  // await prisma.product.createMany({ data: sampleData.products });
  // Resolve the password promises before creating users
  const resolvedUsers = await Promise.all(
    sampleData.users.map(async (user) => ({
      ...user,
      password: await user.password, // Resolve the promise
    }))
  );

  // Now create the users with resolved password values
  await prisma.user.createMany({ data: resolvedUsers });

  console.log("Database seeded successfully");
}

main();
