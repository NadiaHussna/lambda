import {MigrationInterface, QueryRunner} from "typeorm";

export class IndexNavDecimal1622611524895 implements MigrationInterface {
    name = 'IndexNavDecimal1622611524895'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `BenchmarkHistory` CHANGE `index_nav` `index_nav` decimal(20,6) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `BenchmarkHistory` CHANGE `index_nav` `index_nav` decimal(10,6) NOT NULL");
    }

}
