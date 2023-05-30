import {MigrationInterface, QueryRunner} from "typeorm";

export class HolidayHolidayDate1615729684977 implements MigrationInterface {
    name = 'HolidayHolidayDate1615729684977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Holiday` DROP COLUMN `holiday_date`");
        await queryRunner.query("ALTER TABLE `Holiday` ADD `holiday_date` varchar(10) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Holiday` DROP COLUMN `holiday_date`");
        await queryRunner.query("ALTER TABLE `Holiday` ADD `holiday_date` bigint NOT NULL");
    }

}
