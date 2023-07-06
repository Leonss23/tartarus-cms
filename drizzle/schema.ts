import { mysqlTable, mysqlSchema, AnyMySqlColumn, serial, varchar, timestamp } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const cmsStore = mysqlTable("cms-store", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	author: serial("author").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().onUpdateNow().notNull(),
});