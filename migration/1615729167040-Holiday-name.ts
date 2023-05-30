import {MigrationInterface, QueryRunner} from "typeorm";

export class HolidayName1615729167040 implements MigrationInterface {
    name = 'HolidayName1615729167040'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Holiday` ADD `name` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Holiday` DROP COLUMN `name`");
    }

}
