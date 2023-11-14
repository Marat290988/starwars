import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Observable, Subscription, map } from "rxjs";
import { Species } from "../../types/species.type";

@Component({
  selector: 'app-nations',
  templateUrl: './nations.component.html',
  styleUrls: ['./nations.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NationsComponent {
  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ){
    this.species$ = this.dataService.initFetchSpeciesAndGetSpeciesStore(this.dataPage);
  }

  ngOnInit() {
    this.subs.push(
      this.species$.pipe(
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
  species$!: Observable<Species[]>;
  subs: Subscription[] = [];
}
