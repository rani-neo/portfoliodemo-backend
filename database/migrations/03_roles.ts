import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'roles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') //Primary key
      table.string('name', 255).notNullable() //Rolename
      table.timestamps(true) //timestamps (created_at and updated_at)

    })
  }

 public  async down() {
    this.schema.dropTable(this.tableName)
  }
}''
