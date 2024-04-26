import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm';
import { DateTime } from 'luxon';
import Project from './project.js';
import type { HasMany } from '@adonisjs/lucid/types/relations'; // Corrected import statement

export default class Portfolio extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;

  @column()
  declare name: string;

  @column()
  declare userId: number;

  @hasMany(() => Project)
  declare projects: HasMany<typeof Project>;
  projectName: any;
  projectDescription: any;
  imageUrl: any;
}
