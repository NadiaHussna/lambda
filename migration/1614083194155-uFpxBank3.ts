import {MigrationInterface, QueryRunner} from "typeorm";

export class uFpxBank31614083194155 implements MigrationInterface {
    name = 'uFpxBank31614083194155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `FpxBank` DROP COLUMN `bank_name`");
        await queryRunner.query("ALTER TABLE `FpxBank` ADD `bank_name` varchar(150) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `FpxBank` DROP COLUMN `bank_name`");
        await queryRunner.query("ALTER TABLE `FpxBank` ADD `bank_name` varchar(50) NOT NULL");
    }

}
