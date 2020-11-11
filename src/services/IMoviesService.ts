import { Translation } from '../entities/Translation';
import { IImportMovieResponseDTO } from '../useCases/ImportMovie/ImportMovieDTO';

export interface IMoviesService {
    getMovie(id:number):Promise<IImportMovieResponseDTO>;
    getTranslations(id:number):Promise<Translation>;
}
