import { MigrationInterface, QueryRunner } from 'typeorm'

export class agentLicenseCode1622440372888 implements MigrationInterface {
    name = 'agentLicenseCode1622440372888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Agent` CHANGE `agent_code` `agent_code` varchar(30) NULL");
        await queryRunner.query("ALTER TABLE `Agent` CHANGE `license_code` `license_code` varchar(30) NULL");
        await queryRunner.query("ALTER TABLE `Agent` CHANGE `license_no` `license_no` varchar(30) NULL");
        await queryRunner.query("ALTER TABLE `FpxBank` CHANGE `bank_name` `bank_name` varchar(150) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `FpxBank` CHANGE `bank_name` `bank_name` varchar(50) NOT NULL");
        await queryRunner.query("ALTER TABLE `Agent` CHANGE `license_no` `license_no` varchar(20) NULL");
        await queryRunner.query("ALTER TABLE `Agent` CHANGE `license_code` `license_code` varchar(10) NULL");
        await queryRunner.query("ALTER TABLE `Agent` CHANGE `agent_code` `agent_code` varchar(20) NULL");
    }

}
