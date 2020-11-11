import axios from 'axios';

import { IImportMovieResponseDTO, IImportTranslationResponseDTO } from '../../useCases/ImportMovie/ImportMovieDTO';
import { IMoviesService } from '../IMoviesService';

export class TheMovieDBService implements IMoviesService {
  async getMovie(id: number): Promise<IImportMovieResponseDTO> {
    console.log('Puxando filmes da API');

    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=957d44cc233e5e3e4d291376c005abb7`);

      const importMovieDTO:IImportMovieResponseDTO = {
        id: data.id,
        title: data.title,
        overview: data.overview,
      };
      return (importMovieDTO);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getTranslations(id: number): Promise<IImportTranslationResponseDTO> {
    console.log('Puxando translations da API');

    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/translations?api_key=957d44cc233e5e3e4d291376c005abb7`);

      const translationDTO = data.translations.map((translationItem) => ({
        id: translationItem.id,
        name: translationItem.name,
        englishName: translationItem.english_name,
        overview: translationItem.data.overview,
      }));

      const importTranslationDTO:IImportTranslationResponseDTO = {
        translations: translationDTO,
      };

      return (importTranslationDTO);
    } catch (error) {
      throw new Error(error);
    }
  }
}
