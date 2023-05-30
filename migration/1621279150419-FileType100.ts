import { MigrationInterface, QueryRunner } from 'typeorm'

export class FileType1001621279150419 implements MigrationInterface {
    name = 'FileType1001621279150419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Document` CHANGE `file_type` `file_type` varchar(100) NULL");
        await queryRunner.query("ALTER TABLE `FundDocument` CHANGE `file_type` `file_type`varchar(100) NULL");
        await queryRunner.query("ALTER TABLE `ReportDocuments` CHANGE `file_type` `file_type` varchar(100) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ReportDocuments` CHANGE `file_type` `file_type` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `FundDocument` CHANGE `file_type` `file_type` varchar(20) NULL");
        await queryRunner.query("ALTER TABLE `Document` CHANGE `file_type` `file_type` varchar(45) NULL");
    }

}
