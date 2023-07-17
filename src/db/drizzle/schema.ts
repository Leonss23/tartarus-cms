import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  uniqueIndex,
  serial,
  varchar,
  timestamp,
} from "drizzle-orm/mysql-core";
import { InferModel, sql } from "drizzle-orm";

export const cmsStore = mysqlTable(
  "cms_store",
  {
    id: serial("id").primaryKey().notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    author: varchar("author", { length: 255 }).notNull(),
    createdAt: timestamp("created_at", { mode: "string" })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { mode: "string" })
      .defaultNow()
      .onUpdateNow()
      .notNull(),
  },
  (table) => {
    return {
      name: uniqueIndex("name").on(table.name),
    };
  }
);

export type Store = InferModel<typeof cmsStore>;
