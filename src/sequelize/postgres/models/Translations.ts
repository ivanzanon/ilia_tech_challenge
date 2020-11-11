import { DataTypes, Model } from 'sequelize';

import database from '..';

import { Movies } from './Movies';

export interface TranslationsAttributes {
    id: string;

    name: string;

    englishName: string;

    overview: string;

    movie: string;
}

export class Translations extends Model implements TranslationsAttributes {
    id: string;

    name: string;

    englishName: string;

    overview: string;

    movie: string;
}

Translations.init({
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  englishName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  overview: DataTypes.TEXT,
  movie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: database.connection,
  modelName: 'Translations',
});

Movies.hasMany(Translations, {
  foreignKey: 'movie',
  sourceKey: 'id',
});

Translations.belongsTo(Movies, {
  foreignKey: 'movie',
  targetKey: 'id',
});
