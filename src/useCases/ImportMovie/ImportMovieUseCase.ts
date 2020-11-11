import { v4 } from 'uuid';

import { Movie } from '../../entities/Movie';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';
import { IMoviesService } from '../../services/IMoviesService';
import { IImportMovieResponseDTO } from './ImportMovieDTO';

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

      const entityId = v4();
      const movie = new Movie({
        id: entityId, originalId: id, title, overview,
      });

      await this.movieRepository.storeMovie(movie);
    }
}
