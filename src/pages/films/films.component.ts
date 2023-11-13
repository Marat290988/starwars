import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonService } from "../../services/common.service";
import { DataService } from "../../services/data.service";
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { Film } from "../../types/film.type";
import { films } from "../../store/data.action";
import { initialState } from "../../store/data.reducer";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmsComponent {

  constructor(
    private dataService: DataService,
    private store: Store<typeof initialState>,
  ){
    this.films$ = this.store.select('films');
    this.dataService.initFetchFilmData();

  }

  films$!: Observable<Film[]>;

  ngOnInit() {

    this.films$.subscribe(res => {
      console.log(111)
    });
    this.store.dispatch(films([]))

  }

}
