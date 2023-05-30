import {MigrationInterface, QueryRunner} from "typeorm";

export class uFpxBank21614083075800 implements MigrationInterface {
    name = 'uFpxBank21614083075800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `FpxBank` CHANGE `bank_account_number` `bank_account_number` varchar(15) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `FpxBank` CHANGE `bank_account_number` `bank_account_number` varchar(15) NOT NULL");
    }

}
