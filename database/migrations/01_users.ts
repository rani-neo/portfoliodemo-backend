
import { BaseSchema } from '@adonisjs/lucid/schema';

export default class User extends BaseSchema {
  protected tableName = 'users';

  public async up() {
    if (!this.schema.hasTable(this.tableName)) {
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.string('phone', 255).nullable();
        table.string('email', 255).notNullable().unique();
        table.string('address', 255).nullable();
        table.string('linkedin_url', 255).nullable();
        table.integer('portfolio_id').unsigned().references('id').inTable('portfolios').onDelete('CASCADE')
        table.timestamps(true);
      });
    }
  }
  public async down() {
    if (await this.schema.hasTable(this.tableName)) {
      this.schema.dropTable(this.tableName);
    }
  }
}
