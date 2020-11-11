export interface IImportMovieResponseDTO {
    id: string;
    title: string;
    overview: string;
}

export interface IImportTranslationResponseDTO {
    translations: [
        {
            id: string;
            name: string;
            englishName: string;
            overview: string;
        }
    ]
}
