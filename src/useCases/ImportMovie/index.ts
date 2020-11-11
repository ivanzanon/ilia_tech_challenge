import { PostgresMovieRepository } from '../../repositories/implementations/sequelize/PostgresMovieRepository';
import { TheMovieDBService } from '../../services/implementations/TheMovieDBService';
import { ImportMovieController } from './ImportMovieController';
import { ImportMovieUseCase } from './ImportMovieUseCase';

const postgresMovieRepository = new PostgresMovieRepository();
const theMovieDB = new TheMovieDBService();

const importMovieUseCase = new ImportMovieUseCase(postgresMovieRepository, theMovieDB);

const importMovieController = new ImportMovieController(importMovieUseCase);

export { importMovieController };
