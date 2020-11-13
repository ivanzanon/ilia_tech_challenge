import { IImportMovieResponseDTO, IImportTranslationResponseDTOArray } from '../useCases/ImportMovie/ImportMovieDTO';

export interface IMoviesService {
    getMovie(id:string):Promise<IImportMovieResponseDTO>;
    getTranslations(id:string):Promise<IImportTranslationResponseDTOArray>;
}
