/* eslint-disable no-unused-vars */
import { Movie } from '../entities/Movie';

export interface IMoviesRepository {
    storeMovie(movie: Movie): Promise<void>;
}
