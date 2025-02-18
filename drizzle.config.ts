import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "singlestore",
  dbCredentials: {
    url: env.DATABASE_URL,
    host: env.SINGLESTORE_HOST,
    port: parseInt(env.SINGLESTORE_PORT),
    user: env.SINGLESTORE_USER,
    password: env.SINGLESTORE_PASSWORD,
    database: env.SINGLESTORE_DB_NAME,
    ssl: {},
  },
  tablesFilter: ["gdrive-clone_*"],
} satisfies Config;
