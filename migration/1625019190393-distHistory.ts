import { MigrationInterface, QueryRunner } from 'typeorm'

export class distHistory1625019190393 implements MigrationInterface {
    name = 'distHistory1625019190393'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `DistributionHistory` CHANGE `closing_date` `closing_date` bigint NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `DistributionHistory` CHANGE `closing_date` `closing_date` varchar(20) NULL");
    }

}
