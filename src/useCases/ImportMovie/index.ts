import { PostgresMovieRepository } from '../../repositories/implementations/sequelize/PostgresMovieRepository';
import { TheMovieDB } from '../../services/implementations/TheMovieDB';
import { ImportMovieController } from './ImportMovieController';
import { ImportMovieUseCase } from './ImportMovieUseCase';

const postgresMovieRepository = new PostgresMovieRepository();
const theMovieDB = new TheMovieDB();

const importMovieUseCase = new ImportMovieUseCase(postgresMovieRepository, theMovieDB);

const importMovieController = new ImportMovieController(importMovieUseCase);

export { importMovieController };
