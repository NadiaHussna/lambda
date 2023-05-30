import { MigrationInterface, QueryRunner } from 'typeorm'

export class InvestmentDistInstruction1618902118940 implements MigrationInterface {
    name = 'InvestmentDistInstruction1618902118940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Investment` ADD `distribution_instruction` varchar(15) NULL");
        await queryRunner.query("ALTER TABLE `Investment` CHANGE `distribution_instruction` `distribution_instruction` varchar(15) NULL AFTER fund_type;")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Investment` DROP COLUMN `distribution_instruction`");
    }

}
