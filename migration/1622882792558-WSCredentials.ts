import { MigrationInterface, QueryRunner } from 'typeorm'

export class WSCredentials1622882792558 implements MigrationInterface {
    name = 'WSCredentials1622882792558'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `SocketUser` ADD `credentials` json NOT NULL");
        await queryRunner.query("ALTER TABLE `Notification` CHANGE `user_id` `user_id` binary(16) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Notification` CHANGE `user_id` `user_id` binary(16) NULL");
        await queryRunner.query("ALTER TABLE `SocketUser` DROP COLUMN `credentials`");
    }

}
