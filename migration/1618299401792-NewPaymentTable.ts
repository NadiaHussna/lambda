import { MigrationInterface, QueryRunner } from 'typeorm'

export class NewPaymentTable1618299401792 implements MigrationInterface {
    name = 'NewPaymentTable1618299401792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `PaymentInfo` (`payment_info_id` bigint NOT NULL AUTO_INCREMENT, `payment_method` varchar(45) NOT NULL, `kib_bank_name` varchar(100) NULL, `kib_bank_account_number` varchar(45) NULL, `bank_name` varchar(45) NULL, `check_number` varchar(45) NULL, `reference_number` varchar(45) NULL, `client_name` varchar(45) NULL, `client_trust_account_number` varchar(45) NULL, `epf_reference_no` varchar(45) NULL, `epf_account_number` varchar(45) NULL, `bank_account_name` varchar(100) NULL, `bank_account_number` varchar(45) NULL, `recurring_type` varchar(10) NULL, `recurring_bank` varchar(100) NULL, `frequency` varchar(45) NULL, `payment_on` bigint NULL, `timestamp` bigint NOT NULL, PRIMARY KEY (`payment_info_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `Payment` (`payment_id` bigint NOT NULL AUTO_INCREMENT, `MANDT` varchar(10) NOT NULL DEFAULT 'KIB', `application_id` bigint NULL, `agent_id` binary(16) NOT NULL, `client_id` binary(16) NOT NULL, `order_no` varchar(45) NOT NULL, `link` varchar(45) NULL, `doc_id` binary(16) NULL, `payment_info_id` bigint NOT NULL, `currency` varchar(5) NULL, `amount` decimal(14,2) NULL, `remark` varchar(255) NULL, `deleted_on` bigint NULL, `status` varchar(10) NOT NULL DEFAULT 'Pending', `timestamp` bigint NOT NULL, INDEX `payment_doc_id_idx` (`doc_id`), INDEX `payment_application_id_idx` (`application_id`), INDEX `payment_client_id_idx` (`client_id`), INDEX `payment_agent_id_idx` (`agent_id`), INDEX `payment_info_id_idx` (`payment_info_id`), INDEX `payment_order_no_idx` (`order_no`), PRIMARY KEY (`payment_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `Payment` ADD CONSTRAINT `FK_9c6d107c5e1ddb80e81b821b179` FOREIGN KEY (`agent_id`) REFERENCES `Agent`(`agent_id`) ON DELETE RESTRICT ON UPDATE RESTRICT");
        await queryRunner.query("ALTER TABLE `Payment` ADD CONSTRAINT `FK_823c82b9e2ce11ccad66e36b2ce` FOREIGN KEY (`doc_id`) REFERENCES `Document`(`document_id`) ON DELETE RESTRICT ON UPDATE RESTRICT");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Payment` DROP FOREIGN KEY `FK_823c82b9e2ce11ccad66e36b2ce`");
        await queryRunner.query("ALTER TABLE `Payment` DROP FOREIGN KEY `FK_9c6d107c5e1ddb80e81b821b179`");
        await queryRunner.query("DROP INDEX `payment_order_no_idx` ON `Payment`");
        await queryRunner.query("DROP INDEX `payment_info_id_idx` ON `Payment`");
        await queryRunner.query("DROP INDEX `payment_agent_id_idx` ON `Payment`");
        await queryRunner.query("DROP INDEX `payment_client_id_idx` ON `Payment`");
        await queryRunner.query("DROP INDEX `payment_application_id_idx` ON `Payment`");
        await queryRunner.query("DROP INDEX `payment_doc_id_idx` ON `Payment`");
        await queryRunner.query("DROP TABLE `Payment`");
        await queryRunner.query("DROP TABLE `PaymentInfo`");
    }

}
