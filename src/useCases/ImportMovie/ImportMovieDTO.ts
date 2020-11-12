export interface IImportMovieResponseDTO {
    id: string;
    title: string;
    overview: string;
}

export interface IImportTranslationResponseDTO {
    id: string;
    name: string;
    englishName: string;
    overview: string;
}

export interface IImportTranslationResponseDTOArray {
    translations: IImportTranslationResponseDTO[]
}
