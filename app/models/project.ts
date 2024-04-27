import { DateTime } from 'luxon';
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm';
import User from './user.js'; // Adjust the path to the actual location of your user model file
import type { HasMany } from '@adonisjs/lucid/types/relations'; // Correct import path

export default class Portfolio extends BaseModel {
  @column()
  declare projectName: string;

  @column()
  declare projectDescription: string;

  @column()
  declare imageUrl: string;

  @column()
  declare userId: number; // Assuming a foreign key to the user model

  @column({ isPrimary: true })
  declare id: number;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;

  // Relationships
  @hasMany(() => User) // Assuming the relationship in the User model is named 'portfolios'
  declare user: HasMany<typeof User>;
  verb: any;
  subject: any;
  fromTo: any;
  unit: any;
  unitOfMeasure: any;
}
