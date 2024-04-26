import { DateTime } from 'luxon';
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm';
import Portfolio from './portfolio.js'; // Adjust the path to the actual location of your portfolio model file
import type { HasMany } from '@adonisjs/lucid/types/relations'; // Correct import path

export default class User extends BaseModel {
  @column()
  declare email: string;

  @column()
  declare address: string;

  @column()
  declare linkedInurl: string;

  @column({ isPrimary: true })
  declare id: number;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;

  // Relationships
  @hasMany(() => Portfolio)
  declare portfolios: HasMany<typeof Portfolio>; // Assuming the relationship in the Portfolio model is named 'portfolios'
}
