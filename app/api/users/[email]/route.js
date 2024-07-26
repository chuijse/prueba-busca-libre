import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const email = params.email;
  console.log(email);
  const getUser = await prisma.user.findUnique({
    where: { email: String(email) },
  });
  return NextResponse.json(getUser);
}
