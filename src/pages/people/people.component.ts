import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Observable, Subscription, map } from 'rxjs';
import { People } from "../../types/people.type";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent {

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ){
    this.people$ = this.dataService.initFetchPeopeAndGetPeopleStore(this.dataPage);
  }

  ngOnInit() {
    this.subs.push(
      this.people$.pipe(
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
  people$!: Observable<People[]>;
  subs: Subscription[] = [];

}
