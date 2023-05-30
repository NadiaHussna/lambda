import {MigrationInterface, QueryRunner} from "typeorm";

export class AppLog1615287804383 implements MigrationInterface {
    name = 'AppLog1615287804383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `AppLog` (`id` bigint NOT NULL AUTO_INCREMENT, `username` varchar(24) NOT NULL, `endpoint` varchar(100) NOT NULL, `ip` varchar(20) NOT NULL, `access` json NOT NULL, `error` json NULL, `timestamp` bigint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `AppLog`");
    }

}
