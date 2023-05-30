import { MigrationInterface, QueryRunner } from 'typeorm'

export class masterClient1615023778278 implements MigrationInterface {
    name = 'masterClient1615023778278'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `MasterClient` (`master_client_id` bigint NOT NULL AUTO_INCREMENT, `MANDT` varchar(10) NULL, `details` json NULL, `id_number` varchar(45) NULL, `last_updated` bigint NULL, `last_activity` bigint NULL, `timestamp` bigint NOT NULL, INDEX `master_client_id` (`master_client_id`), PRIMARY KEY (`master_client_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `Client` ADD `master_client_id` bigint NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Client` DROP COLUMN `master_client_id`");
        await queryRunner.query("DROP INDEX `master_client_id` ON `MasterClient`");
        await queryRunner.query("DROP TABLE `MasterClient`");
    }

}
