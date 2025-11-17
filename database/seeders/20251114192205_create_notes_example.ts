import { Knex } from "knex";
import { v7 } from "uuid";

export async function seed(knex: Knex): Promise<void> {
    await knex("notes").insert([
        {id: v7(), title: "Example 1", content: "Description note example 1" },
        {id: v7(), title: "Example 2", content: "Description note example 2" },
    ]);
};
