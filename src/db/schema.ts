import { mysqlTable, serial, timestamp, varchar } from "drizzle-orm/mysql-core";

export const store = mysqlTable("cms-store", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  author: serial("author").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "string" })
    .defaultNow()
    .onUpdateNow()
    .notNull(),
});
