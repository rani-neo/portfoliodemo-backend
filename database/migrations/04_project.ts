import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Projects extends BaseSchema {
  protected tableName = 'projects';

  public async up() {
    if (!this.schema.hasTable(this.tableName)) {
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id').primary();
        table.string('title', 255).notNullable();
        table.text('description').notNullable();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').notNullable();
        table.string('industry', 255).notNullable();
        table.integer('portfolio_id').unsigned().references('id').inTable('portfolios').onDelete('CASCADE');
        table.string('methodology', 255).notNullable();
        table.timestamps(true, true);
      });
    }
  }
  public async down() {
    if (await this.schema.hasTable(this.tableName)) {
      this.schema.dropTable(this.tableName);
    }
  }
}
