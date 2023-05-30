import {MigrationInterface, QueryRunner} from "typeorm";

export class NavBenchmark1622557349081 implements MigrationInterface {
    name = 'NavBenchmark1622557349081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `BenchmarkHistory` (`benchmark_history_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, `benchmark_reference_id` bigint NOT NULL, `date` bigint NOT NULL, `index_nav` decimal(10,6) NOT NULL, `timestamp` bigint NOT NULL, PRIMARY KEY (`benchmark_history_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `BenchmarkReference` (`benchmark_reference_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, `fund_ids` json NOT NULL, `asset_name` text NOT NULL, `asset_abbr` varchar(255) NULL, `timestamp` bigint NOT NULL, PRIMARY KEY (`benchmark_reference_id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `BenchmarkReference`");
        await queryRunner.query("DROP TABLE `BenchmarkHistory`");
    }

}
