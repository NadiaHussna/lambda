import { MigrationInterface, QueryRunner } from 'typeorm'

export class AppLogBeResult1624866254989 implements MigrationInterface {
    name = 'AppLogBeResult1624866254989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `AppLog` ADD `be_result` json NULL AFTER access");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `AppLog` DROP COLUMN `be_result`");
    }
}
