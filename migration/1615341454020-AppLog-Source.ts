import { MigrationInterface, QueryRunner } from 'typeorm'

export class AppLogSource1615341454020 implements MigrationInterface {
    name = 'AppLogSource1615341454020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `AppLog` ADD `source` varchar(20) NOT NULL");
        await queryRunner.query("ALTER TABLE `AppLog` CHANGE `source` `source` varchar(20) NOT NULL AFTER ip;")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `AppLog` DROP COLUMN `source`");
    }

}
