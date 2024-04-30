import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'roles'

  public async up() {
    if (!this.schema.hasTable(this.tableName)) {
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id') //Primary key
        table.string('name', 255).notNullable() //Rolename
        table.timestamps(true) //timestamps (created_at and updated_at)

      })
    }
  }
  public async down() {
    if (await this.schema.hasTable(this.tableName)) {
      this.schema.dropTable(this.tableName)
    }
  } 
}
