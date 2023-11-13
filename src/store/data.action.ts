import { createAction } from '@ngrx/store';
import { Film } from '../types/film.type';
import { People } from '../types/people.type';

export const films = createAction('FETCH ALL FILMS', (films: Film[]) => ({payload: {films}}));

export const people = createAction('FETCH PEOPLE PAGE', (people: People[]) => ({payload: {people}}));
