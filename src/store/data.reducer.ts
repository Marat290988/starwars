import { films } from './data.action';
import { Film } from "../types/film.type";
import { createReducer, on } from '@ngrx/store';

export const initialState: {
  films: Film[]
} = {
  films: [],
}

export const dataReducer = createReducer(
  initialState,
  on(films, (state, { payload }) => ({
    ...payload
  }))
)
