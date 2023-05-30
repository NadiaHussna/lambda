import {MigrationInterface, QueryRunner} from "typeorm";

export class AppLogFuncName1615612876788 implements MigrationInterface {
    name = 'AppLogFuncName1615612876788'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `AppLog` ADD `function_name` varchar(100) NULL");
        await queryRunner.query("ALTER TABLE `AppLog` CHANGE `function_name` `function_name` varchar(100) NULL AFTER endpoint;")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `AppLog` DROP COLUMN `function_name`");
    }

}
