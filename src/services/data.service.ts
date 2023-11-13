import { initialState } from './../store/data.reducer';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../types/film.type';
import { CommonService } from './common.service';
import { films, people } from '../store/data.action';
import { getFilms, getPeople } from '../store/data.selector';
import { People } from '../types/people.type';

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

  initFetchPeopeAndGetPeopleStore(dataPage: {page: number}) {
    this.commonService.makeLoading(true);
    this.getPeoplePage().subscribe(res => {
      dataPage.page = res.count;
      console.log(res)
      this.store.dispatch({...people(res.results)});
      this.commonService.makeLoading(false);
    });
    return this.getPeopleStore();
  }

  /* End Peope */

}
