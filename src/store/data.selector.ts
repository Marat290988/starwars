import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DATA_FEATURENAME, initialState } from "./data.reducer";

const getFeature = createFeatureSelector<typeof initialState>(DATA_FEATURENAME);

export const getFilms = createSelector(
  getFeature,
  state => state.films
)

export const getPeople = createSelector(
  getFeature,
  state => state.people
)