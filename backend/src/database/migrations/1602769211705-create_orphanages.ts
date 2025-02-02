import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602769211705 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "orphanages",
            columns: [
                {
                    name: "orphanage_id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "orphanage_name",
                    type: "varchar"
                },
                {
                    name: "latitude",
                    type: "decimal",
                    scale: 10,
                    precision: 2,
                },
                {
                    name: "longitude",
                    type: "decimal",
                    scale: 10,
                    precision: 2,
                },
                {
                    name: "about",
                    type: "varchar"
                },
                {
                    name: "opening_hours",
                    type: "varchar"
                },
                {
                    name: "instructions",
                    type: "varchar"
                },
                {
                    name: "open_on_weekends",
                    type: "boolean",
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orphanages")
    }

}
