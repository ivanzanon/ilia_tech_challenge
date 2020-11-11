import { Movie } from '../../../entities/Movie';
import { Translation } from '../../../entities/Translation';
import { Movies } from '../../../sequelize/postgres/models/Movies';
import { Translations } from '../../../sequelize/postgres/models/Translations';
import { IMoviesRepository } from '../../IMoviesRepository';

export class PostgresMovieRepository implements IMoviesRepository {
  async storeMovie(movie: Movie): Promise<void> {
    try {
      await Movies.create({
        id: movie.getId(),
        originalId: movie.originalId,
        title: movie.title,
        overview: movie.overview,
      });
    } catch (error) {
      console.log('Erro!!!!!!!');
      console.log(error);
      throw new Error(error.message || 'Unexpected error.');
    }
  }

  async storeTranslation(translation: Translation) :Promise<void> {
    try {
      await Translations.create({
        id: translation.id,
        name: translation.name,
        englishName: translation.englishName,
        movie: translation.movie,
        overview: translation.overview,
      });
    } catch (error) {
      console.log('Erro!!!!!!!');
      console.log(error);
      throw new Error(error.message || 'Unexpected error.');
    }
  }
}
