import { Movie } from 'src/entities/Movie';
import { Translation } from 'src/entities/Translation';
import { IMoviesRepository } from 'src/repositories/IMoviesRepository';
import { IMoviesService } from 'src/services/IMoviesService';
import { ElementFlags } from 'typescript';

import { IImportMovieResponseDTO, IImportTranslationResponseDTOArray } from './ImportMovieDTO';
import { ImportMovieUseCase } from './ImportMovieUseCase';

class MockMovieService implements IMoviesService {
  falseMovieDataBase = [{ id: '1', overview: 'A ticking-time-bomb insomniac and a slippery soap salesman...', title: 'Fight Club' },
    { id: '2', overview: 'When their ocean liner capsizes, a group...', title: 'The Poseidon Adventure' },
    { id: '3', overview: 'An emotive journey of a former school', title: 'Central Station' },
    { id: '4', overview: 'When two poor greasers, Johnny, and Ponyboy are...', title: 'The Outsiders' }];

  falseTranslationsMovieDataBase = [
    {
      id: '1',
      translations: [
        {
          englishName: 'Spanish',
          id: '1',
          name: 'Español',
          overview: 'Un joven sin ilusiones lucha contra su...',
        },
        {
          englishName: 'Estonian',
          id: '1',
          name: 'Eesti',
          overview: 'Ilma illusioonideta noormees võitleb...',
        },
      ],
    },
    {
      id: '2',
      translations: [
        {
          englishName: 'French',
          id: '2',
          name: 'Français',
          overview: 'En 1966, dans la petite ville de Tulsa en...',
        },
        {
          englishName: 'Portuguese',
          id: '2',
          name: 'Português',
          overview: 'Em 1965, Tulsa, os adolescentes tinham...',
        },
      ],
    },
  ];

  getMovie(id: string): Promise<IImportMovieResponseDTO> {
    const movie = this.falseMovieDataBase.find((movie) => movie.id === id);

    return Promise.resolve(movie || { id: '0', title: '', overview: '' });
  }

  getTranslations(id: string): Promise<IImportTranslationResponseDTOArray> {
    const movie = this.falseTranslationsMovieDataBase.find((translation) => translation.id === id);
    if (movie && movie.translations) {
      return Promise.resolve({ translations: movie.translations });
    }
    return Promise.resolve({ id: 3, translations: [] });
  }
}

class MockMovieRepository implements IMoviesRepository {
  public movieRelation = [];

  public translationRelation = [];

  storeMovie(movie: Movie): Promise<void> {
    this.movieRelation.push(movie);
    return Promise.resolve();
  }

  storeTranslation(translation: Translation): Promise<void> {
    this.translationRelation.push(
      {
        englishName: translation.englishName,
        id: translation.id,
        name: translation.name,
        overview: translation.overview,
        movie: translation.movie,
      },
    );

    return Promise.resolve();
  }
}

describe('The Import Movie UseCase should...', () => {
  test('... store movie in a database in case of this movie exists and', async () => {
    const mockMovieRepository = new MockMovieRepository();
    const mockMovieService = new MockMovieService();
    const importMovieUseCase = new ImportMovieUseCase(mockMovieRepository, mockMovieService);

    await importMovieUseCase.execute('2');
    const relation = mockMovieRepository.movieRelation.find((element) => element.originalId === '2');

    expect(relation).not.toBeUndefined();
    expect(relation.title).toBe('The Poseidon Adventure');
    expect(relation.overview).toBe('When their ocean liner capsizes, a group...');

    const { translationRelation } = mockMovieRepository;

    expect(translationRelation).not.toBeUndefined();
    expect(translationRelation).toHaveLength(2);
    expect(translationRelation[0].englishName).toBe('French' || 'Portuguese');
    expect(translationRelation[0].name).toBe('Français');
    expect(translationRelation[0].overview).toBe('En 1966, dans la petite ville de Tulsa en...');
  });

  test('... store movie in a database in case of this movie exists and has no translation and', async () => {
    const mockMovieRepository = new MockMovieRepository();
    const mockMovieService = new MockMovieService();
    const importMovieUseCase = new ImportMovieUseCase(mockMovieRepository, mockMovieService);

    await importMovieUseCase.execute('3');
    const relation = mockMovieRepository.movieRelation.find((element) => element.originalId === '3');

    expect(relation).not.toBeUndefined();
    expect(relation.title).toBe('Central Station');
    expect(relation.overview).toBe('An emotive journey of a former school');

    const { translationRelation } = mockMovieRepository;

    expect(translationRelation).toEqual([]);
  });

  test('... throw a message in case of the movie does not exist on the API.', async () => {
    const mockMovieRepository = new MockMovieRepository();
    const mockMovieService = new MockMovieService();
    const importMovieUseCase = new ImportMovieUseCase(mockMovieRepository, mockMovieService);
    expect(async () => { await importMovieUseCase.execute('99'); }).rejects.toEqual(
      Error('Movie id not found on Movie Service'),
    );
  });
});
