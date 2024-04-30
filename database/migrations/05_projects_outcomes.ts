import { BaseSchema } from '@Adonis/Lucid/Schema'

export default class ProjectOutcomes extends BaseSchema {
  protected tableName = 'project_outcomes';
  schema: any;

  public async up() {
    this.schema.createTable(this.tableName, (table: { increments: (arg0: string) => { (): any; new(): any; primary: { (): void; new(): any; }; }; integer: (arg0: string) => { (): any; new(): any; unsigned: { (): { (): any; new(): any; references: { (arg0: string): { (): any; new(): any; inTable: { (arg0: string): { (): any; new(): any; onDelete: { (arg0: string): { (): any; new(): any; notNullable: { (): void; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; string: (arg0: string) => { (): any; new(): any; notNullable: { (): void; new(): any; }; }; timestamps: (arg0: boolean, arg1: boolean) => void; }) => {
      table.increments('id').primary();
      table.integer('project_id').unsigned().references('id').inTable('projects').onDelete('CASCADE').notNullable();
      table.string('verb').notNullable();
      table.string('subject').notNullable();
      table.string('from_to').notNullable();
      table.string('units').notNullable();
      table.string('units_of_measure').notNullable();
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
