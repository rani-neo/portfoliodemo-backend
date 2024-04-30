import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ProjectOutcomes extends BaseSchema {
  protected tableName = 'project_outcomes';

  public async up() {
    await this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('verb').notNullable();
      table.string('subject').notNullable();
      table.string('from_to').notNullable(); // Corrected column name
      table.string('units').notNullable();
      table.string('units_of_measure').notNullable();

      // Corrected syntax for defining timestamps with timezone
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    await this.schema.dropTable(this.tableName);
  }
}

