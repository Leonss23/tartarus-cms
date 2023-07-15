import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { newStore } from "@/lib/db/newStore";
import { getStore } from "@/lib/db/getStore";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const { name } = await req.json();
    if (!name)
      return new NextResponse("Field 'name' required.", { status: 400 });

    const { data: result } = await newStore(name, userId);
    if (!result)
      return new NextResponse("Failed to create store", { status: 409 });

    console.log("[STORE]", result);

    const { data: store } = await getStore(Number(result.insertId), userId);
    if (!store)
      return new NextResponse("Something went wrong", { status: 500 });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_POST]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
