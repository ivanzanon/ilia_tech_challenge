import { Movie } from '../../../entities/Movie';
import { Movies } from '../../../sequelize/postgres/models/Movies';
import { IMoviesRepository } from '../../IMoviesRepository';

export class PostgresMovieRepository implements IMoviesRepository {
  async storeMovie(movie: Movie): Promise<void> {
    try {
      await Movies.create({
        id: '1',
        title: movie.title,
        overview: movie.overview,
      });
    } catch (error) {
      console.log('Erro!!!!!!!');
      console.log(error);
      throw new Error(error.message || 'Unexpected error.');
    }
  }
}
