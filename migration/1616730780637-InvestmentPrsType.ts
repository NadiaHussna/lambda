import { MigrationInterface, QueryRunner } from 'typeorm'

export class InvestmentPrsType1616730780637 implements MigrationInterface {
    name = 'InvestmentPrsType1616730780637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Investment` ADD `prs_type` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `Investment` CHANGE `prs_type` `prs_type` varchar(45) NULL AFTER fund_type;")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Investment` DROP COLUMN `prs_type`");
    }

}
