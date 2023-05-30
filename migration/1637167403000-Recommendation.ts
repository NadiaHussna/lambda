import { MigrationInterface, QueryRunner } from 'typeorm'

export class recommendation1637076845000 implements MigrationInterface {
    name = 'recommendation1637076845000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Recommendation` CHANGE `fund_class` `fund_class` varchar(50) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Recommendation` CHANGE `fund_class` `fund_class` varchar(20) NULL");
    }

}