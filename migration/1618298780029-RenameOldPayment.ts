import { MigrationInterface, QueryRunner } from 'typeorm'

export class RenameOldPayment1618298780029 implements MigrationInterface {
    name = 'RenameOldPayment1618298780029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("RENAME TABLE Payment TO OldPayment");
        await queryRunner.query("ALTER TABLE `OldPayment` DROP FOREIGN KEY `FK_823c82b9e2ce11ccad66e36b2ce`");
        await queryRunner.query("ALTER TABLE `OldPayment` DROP FOREIGN KEY `FK_9c6d107c5e1ddb80e81b821b179`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("RENAME TABLE OldPayment TO Payment");
      await queryRunner.query("ALTER TABLE `Payment` ADD CONSTRAINT `FK_9c6d107c5e1ddb80e81b821b179` FOREIGN KEY (`agent_id`) REFERENCES `Agent`(`agent_id`) ON DELETE RESTRICT ON UPDATE RESTRICT");
      await queryRunner.query("ALTER TABLE `Payment` ADD CONSTRAINT `FK_823c82b9e2ce11ccad66e36b2ce` FOREIGN KEY (`doc_id`) REFERENCES `Document`(`document_id`) ON DELETE RESTRICT ON UPDATE RESTRICT");
    }

}
