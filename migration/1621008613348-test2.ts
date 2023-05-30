import { MigrationInterface, QueryRunner } from 'typeorm'

export class test21621008613348 implements MigrationInterface {
    name = 'test21621008613348'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `NomineeBank` CHANGE `bank_name` `bank_name` varchar(150) NOT NULL");
        await queryRunner.query("ALTER TABLE `PaymentInfo` CHANGE `bank_name` `bank_name` varchar(150) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `PaymentInfo` CHANGE `bank_name` `bank_name` varchar(45) NOT NULL");
      await queryRunner.query("ALTER TABLE `NomineeBank` CHANGE `bank_name` `bank_name` varchar(50) NOT NULL");
    }

}
