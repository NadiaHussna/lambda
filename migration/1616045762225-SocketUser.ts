import {MigrationInterface, QueryRunner} from "typeorm";

export class SocketUser1616045762225 implements MigrationInterface {
    name = 'SocketUser1616045762225'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `SocketUser` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(24) NOT NULL, `connection_id` varchar(20) NOT NULL, `timestamp` bigint NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `SocketUser`");
    }

}
