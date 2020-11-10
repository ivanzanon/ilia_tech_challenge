/* eslint-disable no-unused-vars */
import { Movie } from '../entities/Movie';

export interface IMovieRepository {
    storeMovie(movie: Movie): Promise<void>;
}
