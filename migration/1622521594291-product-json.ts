import { MigrationInterface, QueryRunner } from 'typeorm'

export class productJson1622521594291 implements MigrationInterface {
    name = 'productJson1622521594291'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Recommendation` ADD `fund_detail` json NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Recommendation` DROP COLUMN `fund_detail`");
    }

}