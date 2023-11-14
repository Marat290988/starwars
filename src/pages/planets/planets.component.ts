import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Observable, Subscription, map } from "rxjs";
import { Planet } from "../../types/planet.type";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetsComponent {
  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ){
    this.planets$ = this.dataService.initFetchPlanetsAndGetPlanetsStore(this.dataPage);
  }

  ngOnInit() {
    this.subs.push(
      this.planets$.pipe(
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
  planets$!: Observable<Planet[]>;
  subs: Subscription[] = [];
}
