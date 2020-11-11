import { Movie } from '../entities/Movie';
import { Translation } from '../entities/Translation';

export interface IMoviesRepository {
    storeMovie(movie: Movie): Promise<void>;
    storeTranslation(translation: Translation): Promise<void>;
}
