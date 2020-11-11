import { Language } from '../entities/Language';
import { IImportMovieResponseDTO } from '../useCases/ImportMovie/ImportMovieDTO';

export interface IMoviesService {
    getMovie(id:number):Promise<IImportMovieResponseDTO>;
    getTranslations(id:number):Promise<Language>;
}
