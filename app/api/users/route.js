import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  const { email, name } = await req.json();
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error);
    return new NextResponse.json(
      { error: "User already exists" },
      {
        status: 400,
      }
    );
  }
}
