import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class createConnections1619273795684 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "connections",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "admin_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "socket_id",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestmap",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestmap",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "connections",
      new TableForeignKey({
        name: "FKConnectionUser",
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        columnNames: ["user_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("connections", "FKConnectionUser");
    await queryRunner.dropTable("connections");
  }
}
