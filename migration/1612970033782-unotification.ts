import {MigrationInterface, QueryRunner} from "typeorm";

export class unotification1612970033782 implements MigrationInterface {
    name = 'unotification1612970033782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Notification` ADD `receiver` json NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Notification` DROP COLUMN `receiver`");
    }

}
