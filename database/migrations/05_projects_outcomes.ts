import { BaseSchema } from '@adonisjs/lucid/schema';

export default class ProjectsOutcomes extends BaseSchema {
  protected tableName = 'projects_outcomes';

  public async up() {
    if (!this.schema.hasTable(this.tableName)) {
      await this.schema.createTable(this.tableName, (table) => {
        table.increments('id').primary();
        table.string('verb').notNullable();
        table.string('subject').notNullable();
        table.string('from_to').notNullable(); // Corrected column name
        table.string('units').notNullable();
        table.string('units_of_measure').notNullable();
        table.timestamps(); // Define timestamps without timezone
      });
    }
  }
  public async down() {
    if (!this.schema.hasTable(this.tableName)) {
      await this.schema.dropTable(this.tableName);
    }
  }
}
