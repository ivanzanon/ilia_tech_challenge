import { Movie } from '../../../entities/Movie';
import { IMoviesRepository } from '../../IMoviesRepository';

export class PostgresMovieRepository implements IMoviesRepository {
  storeMovie(movie: Movie): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
