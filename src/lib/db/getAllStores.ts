import { db } from "@/db/connection";
import { cmsStore } from "@/db/drizzle/schema";

export async function getAllStores() {
  try {
    return { data: await db.select().from(cmsStore), error: null };
  } catch (error) {
    console.log("[getAllStores]", error);
    return { data: null, error };
  }
}
