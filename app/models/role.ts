import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm';

import type {ManyToMany} from '@adonisjs/lucid/types/relations';
import project from './project.js'

  export default class Role extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare name: string

  @manyToMany(()  => project)
  declare projects: ManyToMany<typeof project>

}
