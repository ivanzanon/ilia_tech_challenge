import cors from 'cors';
import express, { Request, Response } from 'express';

import { importMovieController } from './useCases/ImportMovie';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/movies/:id', async (request: Request, response: Response) => { await importMovieController.handle(request, response); });

// app.use(routes);
app.listen(3002);
