import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Starship } from "../../types/starship.type";
import { Observable, Subscription, map } from "rxjs";

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipsComponent {
  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ){
    this.starships$ = this.dataService.initFetchStarshipsAndGetStarshipsStore(this.dataPage);
  }

  ngOnInit() {
    this.subs.push(
      this.starships$.pipe(
        map(_ => {
          return this.dataPage.page
        })
      ).subscribe(p => {
        this.page = p;
        this.cdr.detectChanges();
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
    this.dataService.clearData();
  }

  dataPage = {page: 0};
  page = 0;
  starships$!: Observable<Starship[]>;
  subs: Subscription[] = [];
}
