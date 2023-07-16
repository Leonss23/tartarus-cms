import { db } from "@/db/connection";
import { cmsStore } from "@/db/drizzle/schema";
import { eq } from "drizzle-orm";

export async function getStores(author: string) {
  try {
    return {
      data: await db.select().from(cmsStore).where(eq(cmsStore.author, author)),
      error: null,
    };
  } catch (error) {
    console.log("[getStores]", error);
    return { data: null, error };
  }
}
