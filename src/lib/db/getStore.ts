import { db } from "@/db/connection";
import { cmsStore } from "@/db/drizzle/schema";
import { and, eq } from "drizzle-orm";

export async function getStore(id: number, author: string) {
  try {
    return {
      data: (
        await db
          .select()
          .from(cmsStore)
          .where(and(eq(cmsStore.id, id), eq(cmsStore.author, author)))
      )[0],
      error: null,
    };
  } catch (error) {
    console.log("[getStore]", error);
    return { data: null, error };
  }
}
