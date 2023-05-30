import {MigrationInterface, QueryRunner} from "typeorm";

export class PpaMapping1619576351012 implements MigrationInterface {
    name = 'PpaMapping1619576351012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Occupation` DROP COLUMN `is_ppa`");
        await queryRunner.query("ALTER TABLE `Occupation` ADD `occupation` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `Occupation` ADD `employment_status` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `NatureOfBusiness` DROP COLUMN `en`");
        await queryRunner.query("ALTER TABLE `NatureOfBusiness` ADD `en` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `NatureOfBusiness` DROP COLUMN `bm`");
        await queryRunner.query("ALTER TABLE `NatureOfBusiness` ADD `bm` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `Occupation` DROP COLUMN `en`");
        await queryRunner.query("ALTER TABLE `Occupation` ADD `en` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `Occupation` DROP COLUMN `bm`");
        await queryRunner.query("ALTER TABLE `Occupation` ADD `bm` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Occupation` DROP COLUMN `bm`");
        await queryRunner.query("ALTER TABLE `Occupation` ADD `bm` varchar(100) NOT NULL");
        await queryRunner.query("ALTER TABLE `Occupation` DROP COLUMN `en`");
        await queryRunner.query("ALTER TABLE `Occupation` ADD `en` varchar(100) NOT NULL");
        await queryRunner.query("ALTER TABLE `NatureOfBusiness` DROP COLUMN `bm`");
        await queryRunner.query("ALTER TABLE `NatureOfBusiness` ADD `bm` varchar(100) NOT NULL");
        await queryRunner.query("ALTER TABLE `NatureOfBusiness` DROP COLUMN `en`");
        await queryRunner.query("ALTER TABLE `NatureOfBusiness` ADD `en` varchar(100) NOT NULL");
        await queryRunner.query("ALTER TABLE `Occupation` DROP COLUMN `employment_status`");
        await queryRunner.query("ALTER TABLE `Occupation` DROP COLUMN `occupation`");
        await queryRunner.query("ALTER TABLE `Occupation` ADD `is_ppa` tinyint(1) NULL DEFAULT '0'");
    }

}
