import { MigrationInterface, QueryRunner } from 'typeorm'

export class TrackerTargetDate1632885999496 implements MigrationInterface {
    name = 'TrackerTargetDate1632885999496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE StatusTracker ADD target_date bigint NULL AFTER remark`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE StatusTracker DROP COLUMN target_date`);
    }
}
