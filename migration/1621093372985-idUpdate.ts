import { MigrationInterface, QueryRunner } from 'typeorm'

export class idUpdate1621093372985 implements MigrationInterface {
    name = 'idUpdate1621093372985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Application` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `Application` ADD PRIMARY KEY (`order_no`)");
        await queryRunner.query("ALTER TABLE `Application` CHANGE `application_id` `application_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `Application` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `Application` ADD PRIMARY KEY (`order_no`, `application_id`)");
        await queryRunner.query("ALTER TABLE `AuditLog` CHANGE `audit_log_id` `audit_log_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `AuditLog` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `AuditLog` CHANGE `audit_log_id` `audit_log_id` bigint NOT NULL PRIMARY KEY AUTO_INCREMENT");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `AuditLog` CHANGE `audit_log_id` `audit_log_id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `AuditLog` ADD PRIMARY KEY (`audit_log_id`)");
        await queryRunner.query("ALTER TABLE `AuditLog` CHANGE `audit_log_id` `audit_log_id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `Application` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `Application` ADD PRIMARY KEY (`order_no`)");
        await queryRunner.query("ALTER TABLE `Application` CHANGE `application_id` `application_id` bigint NOT NULL");
        await queryRunner.query("ALTER TABLE `Application` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `Application` ADD PRIMARY KEY (`application_id`, `order_no`)");
    }

}
