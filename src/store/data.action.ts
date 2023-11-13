import { createAction } from '@ngrx/store';
import { Film } from '../types/film.type';

export const films = createAction('FETCH ALL FILMS', (films: Film[] ) => ({payload: {films}}));
