import { MigrationInterface, QueryRunner } from 'typeorm'

export class recommendation1614750682082 implements MigrationInterface {
    name = 'recommendation1614750682082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Investment` DROP COLUMN `cancelled_on`");
        await queryRunner.query("ALTER TABLE `Document` CHANGE `doc_type` `doc_type` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `Payment` CHANGE `kib_bank_name` `kib_bank_name` varchar(100) NULL");
        await queryRunner.query("ALTER TABLE `Payment` CHANGE `amount` `amount` decimal(14,2) NULL");
        await queryRunner.query("ALTER TABLE `Recommendation` ADD `dedicated_fund` tinyint(1) NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `Recommendation` ADD `fund_start_date` bigint NULL");
        await queryRunner.query("ALTER TABLE `Recommendation` ADD `tx_after_iop` json NULL");
        await queryRunner.query("ALTER TABLE `Recommendation` ADD `iop_end_date` bigint NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}

}
