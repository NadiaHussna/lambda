import {MigrationInterface, QueryRunner} from "typeorm";

export class landingFund1614824095446 implements MigrationInterface {
    name = 'landingFund1614824095446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Recommendation` ADD `landing_fund` varchar(60) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Recommendation` DROP COLUMN `landing_fund`");
    }

}
