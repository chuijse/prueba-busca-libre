import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "../../../auth";

const prisma = new PrismaClient();

export async function GET() {
  //console.log("hello world");
  const getbooks = await prisma.book.findMany();
  return NextResponse.json(getbooks);
}

export const POST = auth(async function POST(req) {
  const { title, description, imageUrl, author, price } = await req.json();
  console.log(req.auth, "Create book");
  if (req.auth) {
    const newbook = await prisma.book.create({
      data: {
        title: String(title),
        description: String(description),
        author: String(author),
        imageUrl: String(imageUrl),
        price: Number(price),
        userId: Number(req.auth.user.id),
      },
    });
    console.log(`book ${title} created`);
    return NextResponse.json(newbook);
  } else {
    return (
      NextResponse.json({ message: "Not authenticated" }),
      {
        status: 401,
      }
    );
  }
});
