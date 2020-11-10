import { Movie } from '../../../entities/Movie';
import { IMovieRepository } from '../../repositories/IMoviesRepository';

export class PostgresMovieRepository implements IMovieRepository {
  storeMovie(movie: Movie): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
