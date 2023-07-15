import { db } from "@/db/connection";
import { cmsStore } from "@/db/drizzle/schema";
import { asc, eq } from "drizzle-orm";

export async function getFirstStore(author: string) {
  try {
    return {
      data: (
        await db
          .select()
          .from(cmsStore)
          .where(eq(cmsStore.author, author))
          .orderBy(asc(cmsStore.id))
          .limit(1)
      )[0],
      error: null,
    };
  } catch (error) {
    console.log("[getFirstStore]", error);
    return { data: null, error };
  }
}
