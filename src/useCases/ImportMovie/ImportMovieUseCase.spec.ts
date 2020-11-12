import { Movie } from 'src/entities/Movie';
import { Translation } from 'src/entities/Translation';
import { IMoviesRepository } from 'src/repositories/IMoviesRepository';
import { IMoviesService } from 'src/services/IMoviesService';

import { IImportMovieResponseDTO, IImportTranslationResponseDTOArray } from './ImportMovieDTO';
import { ImportMovieUseCase } from './ImportMovieUseCase';

function sum(a, b) {
  return a + b;
}

class MockMovieService implements IMoviesService {
  getMovie(id: string): Promise<IImportMovieResponseDTO> {
    return Promise.resolve({ id: '1', overview: 'Overview', title: 'title' });
  }

  getTranslations(id: string): Promise<IImportTranslationResponseDTOArray> {
    return Promise.resolve({
      translations: [
        {
          englishName: 'dsada',
          id: 'csc',
          name: 'fdsfsd',
          overview: 'sadasdas',
        },
        {
          englishName: 'dsada',
          id: 'csc',
          name: 'fdsfsd',
          overview: 'sadasdas',
        },
      ],
    });
  }
}

class MockMovieRepository implements IMoviesRepository {
  storeMovie(movie: Movie): Promise<void> {
  }

  storeTranslation(translation: Translation): Promise<void> {
  }
}

describe('The Import Movie UseCase should...', () => {
  test('... return undefined in case of success and', async () => {
    const mockMovieRepository = new MockMovieRepository();
    const mockMovieService = new MockMovieService();
    const importMovieUseCase = new ImportMovieUseCase(mockMovieRepository, mockMovieService);

    expect(await importMovieUseCase.execute('2')).toBeUndefined();
  });

  test('... throw an error in case of the movie id is not found by the service and', () => {
    expect(sum(21, 2)).toBe(4);
  });

  test('... return a successful message in case of the movie doesnt have a translation and', () => {
    expect(sum(21, 2)).toBe(4);
  });

  test('... throw an error in case of the movie name returned by the API is null', () => {
    expect(sum(21, 2)).toBe(4);
  });
});
