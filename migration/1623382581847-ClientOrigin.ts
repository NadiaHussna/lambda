import {MigrationInterface, QueryRunner} from "typeorm";

export class ClientOrigin1623382581847 implements MigrationInterface {
    name = 'ClientOrigin1623382581847'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Client` ADD `origin` varchar(20) NULL DEFAULT 'OMNI'");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Client` DROP COLUMN `origin`");
    }

}
