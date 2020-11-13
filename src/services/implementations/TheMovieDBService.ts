import axios from 'axios';

import { IImportMovieResponseDTO, IImportTranslationResponseDTO, IImportTranslationResponseDTOArray } from '../../useCases/ImportMovie/ImportMovieDTO';
import { IMoviesService } from '../IMoviesService';

export class TheMovieDBService implements IMoviesService {
  async getMovie(id: string): Promise<IImportMovieResponseDTO> {
    console.log('Puxando filmes da API');

    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=957d44cc233e5e3e4d291376c005abb7`);

      if (data.id) {
        const importMovieDTO:IImportMovieResponseDTO = {
          id: data.id,
          title: data.title,
          overview: data.overview,
        };
        return (importMovieDTO);
      }
      return ({ id: '0', title: '', overview: '' });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getTranslations(id: string): Promise<IImportTranslationResponseDTOArray> {
    console.log('Puxando translations da API');

    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/translations?api_key=957d44cc233e5e3e4d291376c005abb7`);

      if (data.translation) {
        const translationDTO:IImportTranslationResponseDTO[] = data.translations.map(
          (translationItem) => ({
            id: translationItem.id,
            name: translationItem.name,
            englishName: translationItem.english_name,
            overview: translationItem.data.overview,
          }),
        );
        const importTranslationDTO:IImportTranslationResponseDTOArray = {
          translations: translationDTO,
        };

        return (importTranslationDTO);
      }
      return ({ translations: [] });
    } catch (error) {
      throw new Error(error);
    }
  }
}
