import { IMovieRepository } from '../repositories/IMoviesRepository';
import { IMoviesService } from '../services/IMoviesService';

export class ImportMovieUseCase {
    private movieRepository: IMovieRepository;

    private moviesService: IMoviesService;

    constructor(movieRepository: IMovieRepository, moviesService: IMoviesService) {
      this.movieRepository = movieRepository;
      this.moviesService = moviesService;
    }

    async execute(id:string): Promise<void> {
      const movie = this.moviesService.getMovie(id);
      this.movieRepository.store(movie);
    }
}
