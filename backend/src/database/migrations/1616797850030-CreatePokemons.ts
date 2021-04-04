import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePokemons1616797850030 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pokemons",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "type",
                        type: "varchar",
                    },
                    {
                        name: "numberPokemon",
                        type: "number"
                    },
                    {
                        name: "image",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pokemons");
    }

}
