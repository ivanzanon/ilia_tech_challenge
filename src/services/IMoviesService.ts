import { Language } from '../entities/Language';
import { Movie } from '../entities/Movie';

export interface IMoviesService {
    getMovie(id:number):Promise<Movie[]>;
    getTranslations(id:number):Promise<Language>;
}
