import { IImportMovieResponseDTO, IImportTranslationResponseDTO } from '../useCases/ImportMovie/ImportMovieDTO';

export interface IMoviesService {
    getMovie(id:number):Promise<IImportMovieResponseDTO>;
    getTranslations(id:number):Promise<IImportTranslationResponseDTO>;
}
