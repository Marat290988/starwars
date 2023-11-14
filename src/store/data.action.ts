import { createAction } from '@ngrx/store';
import { Film } from '../types/film.type';
import { People } from '../types/people.type';
import { Starship } from '../types/starship.type';
import { Transport } from '../types/transport.type';
import { Planet } from '../types/planet.type';
import { Species } from '../types/species.type';

export const films = createAction('FETCH ALL FILMS', (films: Film[]) => ({payload: {films}}));

export const people = createAction('FETCH PEOPLE PAGE', (people: People[]) => ({payload: {people}}));

export const starships = createAction('FETCH STARSHIPS PAGE', (starships: Starship[]) => ({payload: {starships}}));

export const transports = createAction('FETCH TRANSPORT PAGE', (transports: Transport[]) => ({payload: {transports}}));

export const planets = createAction('FETCH PLANET PAGE', (planets: Planet[]) => ({payload: {planets}}));

export const species = createAction('FETCH SPECIES PAGE', (species: Species[]) => ({payload: {species}}));
