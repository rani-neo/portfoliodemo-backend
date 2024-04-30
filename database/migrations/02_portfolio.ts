import { BaseSchema } from '@Adonis/Lucid/Schema'

export default class Portfolios extends BaseSchema {
  protected tableName = 'portfolios'
  schema: any

  public async up() {
    this.schema.createTable(this.tableName, (table: { increments: (arg0: string) => void; string: (arg0: string, arg1: number) => { (): any; new(): any; notNullable: { (): void; new(): any } }; integer: (arg0: string) => { (): any; new(): any; unsigned: { (): { (): any; new(): any; references: { (arg0: string): { (): any; new(): any; inTable: { (arg0: string): { (): any; new(): any; onDelete: { (arg0: string): void; new(): any } }; new(): any } }; new(): any } }; new(): any } }; timestamps: (arg0: boolean) => void }) => {
      table.increments('id') // Primary key
      table.string('name', 255).notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE') // Corrected foreign key with CASCADE
      table.timestamps(true) // Timestamps (created_at and updated_at)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
