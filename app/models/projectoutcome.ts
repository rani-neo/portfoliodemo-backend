
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import project from './project.js'

export default class Projectoutcome extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

@column()
declare verb: string

@column()
declare subject: string

@column()
declare fromTo: string

@column()
declare unit: string

  @column()
declare  unitOfMeasure: string

@manyToMany(() => project)
declare projects: ManyToMany<typeof this.projects>
}











