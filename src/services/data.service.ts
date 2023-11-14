import { starships, transports, planets, species } from './../store/data.action';
import { initialState } from './../store/data.reducer';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../types/film.type';
import { CommonService } from './common.service';
import { films, people } from '../store/data.action';
import { getFilms, getPeople, getPlanets, getSpecies, getStarships, getTransports } from '../store/data.selector';
import { People } from '../types/people.type';
import { Starship } from '../types/starship.type';
import { Transport } from '../types/transport.type';
import { Planet } from '../types/planet.type';
import { Species } from '../types/species.type';

type DataRes = {
  count: number,
  next: string | null,
  previous: string | null
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private store: Store<typeof initialState>,
    private commonService: CommonService
  ){}

  private apiUrl = 'https://swapi.dev/api/';

  callFetchData(
    funcName: 'initFetchPeopeAndGetPeopleStore' | 'initFetchStarshipsAndGetStarshipsStore' |
    'initFetchTransportsAndGetTransportsStore' | 'initFetchPlanetsAndGetPlanetsStore' | 'initFetchSpeciesAndGetSpeciesStore',
    page: number) {
    if (funcName === 'initFetchPeopeAndGetPeopleStore') {
      this.initFetchPeopeAndGetPeopleStore({page}, page);
    } else if (funcName === 'initFetchStarshipsAndGetStarshipsStore') {
      this.initFetchStarshipsAndGetStarshipsStore({page}, page);
    } else if (funcName === 'initFetchTransportsAndGetTransportsStore') {
      this.initFetchTransportsAndGetTransportsStore({page}, page);
    } else if (funcName === 'initFetchPlanetsAndGetPlanetsStore') {
      this.initFetchPlanetsAndGetPlanetsStore({page}, page);
    } else if (funcName === 'initFetchSpeciesAndGetSpeciesStore') {
      this.initFetchSpeciesAndGetSpeciesStore({page}, page);
    }
  }

  clearData() {
    this.store.dispatch(films([]));
    this.store.dispatch({...starships([])});
    this.store.dispatch({...transports([])});
    this.store.dispatch({...planets([])});
    this.store.dispatch({...species([])});
    this.store.dispatch({...people([])});
  }

  /* Films */

  private getAllFilms(): Observable<DataRes & {results: Film[]}> {
    return this.http.get<DataRes & {results: Film[]}>(this.apiUrl + 'films');
  }

  private getFilmStore(): Observable<Film[]> {
    return this.store.pipe(select(getFilms));
  }

  initFetchFilmDataAndGetFilmStore(): Observable<Film[]> {
    this.commonService.makeLoading(true);
    this.getAllFilms().subscribe(
      res => {
        this.store.dispatch(films(res.results));
        this.commonService.makeLoading(false);
      }
    );
    return this.getFilmStore();
  }

  /* End Films */

  /* Peope */

  private getPeoplePage(page: number = 1): Observable<DataRes & {results: People[]}> {
    return this.http.get<DataRes & {results: People[]}>(this.apiUrl + 'people' + `/?page=${page}`);
  }

  private getPeopleStore(): Observable<People[]> {
    return this.store.pipe(select(getPeople));
  }

  initFetchPeopeAndGetPeopleStore(dataPage: {page: number}, currentPage = 1) {
    this.commonService.makeLoading(true);
    this.getPeoplePage(currentPage).subscribe(res => {
      dataPage.page = res.count;
      this.store.dispatch({...people(res.results)});
      this.commonService.makeLoading(false);
    });
    return this.getPeopleStore();
  }

  /* End Peope */

  /* Starships */

  private getStarshipsPage(page: number = 1): Observable<DataRes & {results: Starship[]}> {
    return this.http.get<DataRes & {results: Starship[]}>(this.apiUrl + 'starships' + `/?page=${page}`);
  }

  private getStarshipsStore(): Observable<Starship[]> {
    return this.store.pipe(select(getStarships));
  }

  initFetchStarshipsAndGetStarshipsStore(dataPage: {page: number}, currentPage = 1) {
    this.commonService.makeLoading(true);
    this.getStarshipsPage(currentPage).subscribe(res => {
      dataPage.page = res.count;
      this.store.dispatch({...starships(res.results)});
      this.commonService.makeLoading(false);
    });
    return this.getStarshipsStore();
  }

  /* End Starships */

  /* Start Transport */

  private getTransportsPage(page: number = 1): Observable<DataRes & {results: Transport[]}> {
    return this.http.get<DataRes & {results: Transport[]}>(this.apiUrl + 'vehicles' + `/?page=${page}`);
  }

  private getTransportsStore(): Observable<Transport[]> {
    return this.store.pipe(select(getTransports));
  }

  initFetchTransportsAndGetTransportsStore(dataPage: {page: number}, currentPage = 1) {
    this.commonService.makeLoading(true);
    this.getTransportsPage(currentPage).subscribe(res => {
      dataPage.page = res.count;
      this.store.dispatch({...transports(res.results)});
      this.commonService.makeLoading(false);
    });
    return this.getTransportsStore();
  }

  /* End transport */

  /* Start Planets */

  private getPlanetsPage(page: number = 1): Observable<DataRes & {results: Planet[]}> {
    return this.http.get<DataRes & {results: Planet[]}>(this.apiUrl + 'planets' + `/?page=${page}`);
  }

  private getPlanetsStore(): Observable<Planet[]> {
    return this.store.pipe(select(getPlanets));
  }

  initFetchPlanetsAndGetPlanetsStore(dataPage: {page: number}, currentPage = 1) {
    this.commonService.makeLoading(true);
    this.getPlanetsPage(currentPage).subscribe(res => {
      dataPage.page = res.count;
      this.store.dispatch({...planets(res.results)});
      this.commonService.makeLoading(false);
    });
    return this.getPlanetsStore();
  }

  /* End Planets */

  /* Start Species */

  private getSpeciesPage(page: number = 1): Observable<DataRes & {results: Species[]}> {
    return this.http.get<DataRes & {results: Species[]}>(this.apiUrl + 'species' + `/?page=${page}`);
  }

  private getSpeciesStore(): Observable<Species[]> {
    return this.store.pipe(select(getSpecies));
  }

  initFetchSpeciesAndGetSpeciesStore(dataPage: {page: number}, currentPage = 1) {
    this.commonService.makeLoading(true);
    this.getSpeciesPage(currentPage).subscribe(res => {
      dataPage.page = res.count;
      this.store.dispatch({...species(res.results)});
      this.commonService.makeLoading(false);
    });
    return this.getSpeciesStore();
  }

  /* End Species */

}
