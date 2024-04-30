import { BaseSchema } from '@adonisjs/lucid/schema'

export default class users extends BaseSchema {
  protected tableName = 'user'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).notNullable()
      table.string('phone', 255).nullable()
      table.string('email', 255).notNullable().unique()
      table.string('address', 255).nullable()
      table.string('linkedin_url', 255).nullable()
      table.timestamp('created_at'), { useTz: true }
      table.timestamp('updated_at'), { useTz: true }
    })
  }

 public  async down() {
    this.schema.dropTable(this.tableName)
  }
}
