import { Component, ChangeDetectionStrategy } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Observable } from "rxjs";
import { Film } from "../../types/film.type";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmsComponent {

  constructor(
    private dataService: DataService
  ){
    this.films$ = this.dataService.initFetchFilmDataAndGetFilmStore();
  }

  films$!: Observable<Film[]>;

  ngOnInit() {
  }

}
