import { MigrationInterface, QueryRunner } from 'typeorm'

export class AgentMissing1620881725585 implements MigrationInterface {
    name = 'AgentMissing1620881725585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Agent` ADD `agent_address` json NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Agent` DROP COLUMN `agent_address`");
    }

}
