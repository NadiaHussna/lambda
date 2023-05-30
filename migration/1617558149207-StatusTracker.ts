import { MigrationInterface, QueryRunner } from 'typeorm'

export class StatusTracker1617558149207 implements MigrationInterface {
    name = 'StatusTracker1617558149207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `StatusTracker` (`tracker_id` bigint NOT NULL AUTO_INCREMENT, `MANDT` varchar(10) NOT NULL DEFAULT 'KIB', `tracker_key` json NOT NULL, `user_type` varchar(45) NOT NULL, `user_id` binary(16) NOT NULL, `username` varchar(16) NOT NULL, `status_id` int NOT NULL, `remark` varchar(255) NULL, `timestamp` bigint NOT NULL, PRIMARY KEY (`tracker_id`)) ENGINE=InnoDB");
        await queryRunner.query("DROP TABLE `FundTracker`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `StatusTracker`");
    }

}
