import { MigrationInterface, QueryRunner } from 'typeorm'

export class ClientNameLength1620366470174 implements MigrationInterface {
    name = 'ClientNameLength1620366470174'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Client` MODIFY COLUMN `name` varchar(150) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Client` MODIFY COLUMN `name` varchar(45) NULL");
    }

}
