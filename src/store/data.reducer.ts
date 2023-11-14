import { films, people, planets, species, starships, transports } from './data.action';
import { Film } from "../types/film.type";
import { createReducer, on } from '@ngrx/store';
import { People } from '../types/people.type';
import { Starship } from '../types/starship.type';
import { Transport } from '../types/transport.type';
import { Planet } from '../types/planet.type';
import { Species } from '../types/species.type';

export const DATA_FEATURENAME = 'data';

export const initialState: {
  films: Film[],
  people: People[],
  starships: Starship[],
  transports: Transport[],
  planets: Planet[],
  species: Species[]
} = {
  films: [],
  people: [],
  starships: [],
  transports: [],
  planets: [],
  species: []
}

export const dataReducer = createReducer(
  initialState,
  on(films, (state, { payload }) => {
    return {
      ...state,
      films: payload.films
    }
  }),
  on(people, (state, { payload }) => {
    return {
      ...state,
      people: payload.people
    }
  }),
  on(starships, (state, { payload }) => {
    return {
      ...state,
      starships: payload.starships
    }
  }),
  on(transports, (state, { payload }) => {
    return {
      ...state,
      transports: payload.transports
    }
  }),
  on(planets, (state, { payload }) => {
    return {
      ...state,
      planets: payload.planets
    }
  }),
  on(species, (state, { payload }) => {
    return {
      ...state,
      species: payload.species
    }
  })
)
