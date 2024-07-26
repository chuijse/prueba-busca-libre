import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "../../../../auth";

const prisma = new PrismaClient();

export const GET = auth(async function GET(req) {
  if (req.auth) {
    const getbook = await prisma.book.findMany({
      where: { userId: Number(req.auth.user.id) },
    });
    return NextResponse.json(getbook);
  }
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});
