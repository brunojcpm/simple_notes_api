import type { Knex } from "knex";

export const config: Knex.Config = {
  client: "postgresql",
  connection: process.env.DATABASE_URL,
  pool: {
		min: 1,
		max: 1,
	},
  migrations: {
    tableName: "knex_migrations",
    directory: ["./database/migrations"],
  },
  seeds: {
    timestampFilenamePrefix: true,
    directory: "./database/seeders"
  }
}

export default config;