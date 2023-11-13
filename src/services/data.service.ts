import { initialState } from './../store/data.reducer';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../types/film.type';
import { CommonService } from './common.service';
import { films } from '../store/data.action';

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

  private getAllFilms(): Observable<DataRes & {results: Film[]}> {
    return this.http.get<DataRes & {results: Film[]}>(this.apiUrl + 'films');
  }

  getFilmStore() {
    return this.store.select('films');
  }

  initFetchFilmData() {
    // this.commonService.makeLoading(true);
    // this.getAllFilms().subscribe(
    //   res => {
    //     console.log(res.results)
    //     this.store.dispatch(films(res.results));
    //     this.commonService.makeLoading(false);
    //   }
    // );
  }

}
