import { MigrationInterface, QueryRunner } from 'typeorm'

export class TableDeletion1617767159278 implements MigrationInterface {
    name = 'TableDeletion1617767159278'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `HardCopyQueue`");
        await queryRunner.query("DROP TABLE `TargetDateExtension`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       
    }

}
