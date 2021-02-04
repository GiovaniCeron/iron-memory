import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1612286729266 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: 'id',
                    type: 'bigserial',
                    isPrimary: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'text',
                },
                {
                    name: 'email',
                    type: 'text',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'text',
                },
                {
                    name: 'date_create',
                    type: 'timestamp',
                    default: 'current_timestamp'
                },
                {
                    name: 'date_update',
                    type: 'timestamp',
                    default: 'current_timestamp'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
