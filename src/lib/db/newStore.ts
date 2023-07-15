import { db } from "@/db/connection";
import { cmsStore } from "@/db/drizzle/schema";

export async function newStore(name: string, author: string) {
  try {
    return {
      data: await db.insert(cmsStore).values({ name, author }),
      error: null,
    };
  } catch (error) {
    console.log("[newStore]", error);
    return { data: null, error };
  }
}
