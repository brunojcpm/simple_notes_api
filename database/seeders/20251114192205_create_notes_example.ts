import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("notes").insert([
        { title: "Example 1", content: "Description note example 1" },
        { title: "Example 2", content: "Description note example 2" },
    ]);
};
