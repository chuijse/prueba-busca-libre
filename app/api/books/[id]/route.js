import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "../../../../auth";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const id = params.id;
  console.log(id);
  const getbook = await prisma.book.findUnique({
    where: { id: Number(id) },
  });
  return NextResponse.json(getbook);
}

export const DELETE = auth(async function DELETE(req, { params }) {
  const id = params.id;
  const book = await prisma.book.findUnique({ where: { id: Number(id) } });
  if (req.auth) {
    await prisma.book.delete({ where: { id: parseInt(id) } });
    console.log(`${book.title} is deleted`);
    return NextResponse.json({
      message: "`book with id${id} is delete`}, {status: 200}",
    });
  } else {
    return NextResponse.json({ error: "Not authenticated" });
  }
});
