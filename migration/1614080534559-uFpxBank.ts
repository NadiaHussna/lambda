import {MigrationInterface, QueryRunner} from "typeorm";

export class uFpxBank1614080534559 implements MigrationInterface {
    name = 'uFpxBank1614080534559'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `FpxBank` ADD `bank_code` varchar(15) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `FpxBank` DROP COLUMN `bank_code`");
    }

}
