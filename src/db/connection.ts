import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { config } from "@/db/config";

const connection = connect(config);
export const db = drizzle(connection);
