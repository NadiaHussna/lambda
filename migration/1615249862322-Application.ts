import {MigrationInterface, QueryRunner} from "typeorm";

export class Application1615249862322 implements MigrationInterface {
    name = 'Application1615249862322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `Application` (`application_id` bigint NOT NULL, `uta_id` binary(16) NOT NULL, `order_no` varchar(45) NOT NULL, `agent_id` binary(16) NOT NULL, `timestamp` bigint NOT NULL, PRIMARY KEY (`application_id`, `order_no`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `Application`");
    }

}
