import { films, people } from './data.action';
import { Film } from "../types/film.type";
import { createReducer, on } from '@ngrx/store';
import { People } from '../types/people.type';

export const DATA_FEATURENAME = 'data';

export const initialState: {
  films: Film[],
  people: People[]
} = {
  films: [],
  people: []
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
  })
)
