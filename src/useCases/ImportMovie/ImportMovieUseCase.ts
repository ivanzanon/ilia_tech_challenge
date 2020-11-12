import { v4 } from 'uuid';

import { Movie } from '../../entities/Movie';
import { Translation } from '../../entities/Translation';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';
import { IMoviesService } from '../../services/IMoviesService';
import { IImportMovieResponseDTO, IImportTranslationResponseDTO, IImportTranslationResponseDTOArray } from './ImportMovieDTO';

export class ImportMovieUseCase {
    private movieRepository: IMoviesRepository;

    private moviesService: IMoviesService;

    constructor(movieRepository: IMoviesRepository, moviesService: IMoviesService) {
      this.movieRepository = movieRepository;
      this.moviesService = moviesService;
    }

    async execute(movieID:string): Promise<void> {
      try {
        const {
          id,
          title,
          overview,
        }:IImportMovieResponseDTO = await this.moviesService.getMovie(movieID);

        const {
          translations,
        }: IImportTranslationResponseDTOArray = await this.moviesService.getTranslations(movieID);

        const movieUUID = v4();
        const movie = new Movie({
          id: movieUUID, originalId: id, title, overview,
        });

        await this.movieRepository.storeMovie(movie);

        await Promise.all(
          translations.map(async (translationItem) => {
            const translationUUID = v4();
            const translation = new Translation({
              id: translationUUID,
              englishName: translationItem.englishName,
              name: translationItem.name,
              overview: translationItem.overview,
              movie: movieUUID,
            });
            await this.movieRepository.storeTranslation(translation);
            return translationItem;
          }),
        );
      } catch (error) {
        throw new Error(error);
      }
    }
}
