import { BaseSchema } from '@adonisjs/lucid/schema';

export default class CreatePortfolios extends BaseSchema {
  protected tableName = 'portfolios';

  public async up() {
    if (!this.schema.hasTable(this.tableName)) {
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id');
        table.string('name').notNullable();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete
          ('CASCADE');
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
