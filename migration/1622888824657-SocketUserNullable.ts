import {MigrationInterface, QueryRunner} from "typeorm";

export class SocketUserNullable1622888824657 implements MigrationInterface {
    name = 'SocketUserNullable1622888824657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `SocketUser` CHANGE `connection_id` `connection_id` varchar(20) NULL");
        await queryRunner.query("ALTER TABLE `SocketUser` CHANGE `credentials` `credentials` json NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `SocketUser` CHANGE `credentials` `credentials` json NOT NULL");
        await queryRunner.query("ALTER TABLE `SocketUser` CHANGE `connection_id` `connection_id` varchar(20) NOT NULL");
    }

}
