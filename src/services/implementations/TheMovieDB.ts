import { Movie } from 'src/entities/Movie';

import { IMoviesService } from '../IMoviesService';

export class TheMovieDB implements IMoviesService {
  getMovie(id: number): Promise<Movie[]> {
    console.log('Puxando filmes da API');
    throw new Error('Method not implemented.');
  }

  getTranslations(id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
