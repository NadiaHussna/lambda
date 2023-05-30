import {MigrationInterface, QueryRunner} from "typeorm";

export class Agent1615117502427 implements MigrationInterface {
    name = 'Agent1615117502427'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Agent` CHANGE `fa_code` `fa_code` varchar(20) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Agent` CHANGE `fa_code` `fa_code` varchar(20) NOT NULL");
    }

}
