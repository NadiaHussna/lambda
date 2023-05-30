import {MigrationInterface, QueryRunner} from "typeorm";

export class InvestmentRemove1620989137830 implements MigrationInterface {
    name = 'InvestmentRemove1620989137830'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Investment` DROP COLUMN `accumulated_balance`");
        await queryRunner.query("ALTER TABLE `Investment` DROP COLUMN `payment_id`");
        await queryRunner.query("ALTER TABLE `Investment` CHANGE `MANDT` `MANDT` varchar(10) NOT NULL DEFAULT 'KIB'");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Investment` CHANGE `MANDT` `MANDT` varchar(10) NOT NULL");
        await queryRunner.query("ALTER TABLE `Investment` ADD `payment_id` binary(16) NULL");
        await queryRunner.query("ALTER TABLE `Investment` ADD `accumulated_balance` decimal(13,4) NULL");
    }

}
