import { v4 } from 'uuid';

import { Movie } from '../../entities/Movie';
import { Translation } from '../../entities/Translation';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';
import { IMoviesService } from '../../services/IMoviesService';
import { IImportMovieResponseDTO, IImportTranslationResponseDTO } from './ImportMovieDTO';

export class ImportMovieUseCase {
    private movieRepository: IMoviesRepository;

    private moviesService: IMoviesService;

    constructor(movieRepository: IMoviesRepository, moviesService: IMoviesService) {
      this.movieRepository = movieRepository;
      this.moviesService = moviesService;
    }

    async execute(movieID:number): Promise<void> {
      const {
        id,
        title,
        overview,
      }:IImportMovieResponseDTO = await this.moviesService.getMovie(movieID);

      const {
        translations,
      }: IImportTranslationResponseDTO = await this.moviesService.getTranslations(movieID);

      const movieUUID = v4();
      const movie = new Movie({
        id: movieUUID, originalId: id, title, overview,
      });

      await this.movieRepository.storeMovie(movie);

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
      });
    }
}
